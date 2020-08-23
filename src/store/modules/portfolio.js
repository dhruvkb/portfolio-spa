import { parse } from '@/store/support/tree'
import { mapping } from '@/templates/portfolio/commands'

const state = {
  isFirstRun: true,
  tree: null,
  currentNode: null,
  interactionHistory: [],
  isProcessing: false
}

const getters = {
  nodeNamed: state => nodeName => {
    let nodeInQuestion = null
    state.tree.traverse(node => {
      if (node.hasName(nodeName)) {
        nodeInQuestion = node
        return false // stops further traversal
      }
      return true // continues further traversal
    })

    return nodeInQuestion
  },
  nodeLocatedAt: state => path => {
    let nodeInQuestion = state.currentNode
    const pathEntities = path.split('/')

    for (let i = 0; i < pathEntities.length; i++) {
      const entity = pathEntities[i]

      if (entity === '~' || entity === '') {
        nodeInQuestion = state.tree
      } else if (entity === '.') {
        // Do nothing as . refers to current directory
      } else if (entity === '..') {
        nodeInQuestion = nodeInQuestion.parent
      } else {
        nodeInQuestion = nodeInQuestion.children
          .find(child => child.hasName(entity))
        if (!nodeInQuestion) {
          return null
        }
      }
    }

    return nodeInQuestion
  },
  absolutePathTo: (state, getters) => node => {
    if (node.name === '~') {
      return '~'
    } else {
      return `${getters.absolutePathTo(node.parent)}/${node.name}`
    }
  }
}

const mutations = {
  setTree (state, payload) {
    const rootNode = parse(payload.fs, true)
    rootNode.makeRoot()

    state.tree = rootNode
    state.currentNode = rootNode
  },
  setCurrentNode (state, payload) {
    state.currentNode = payload.currentNode
  },
  setIsProcessing (state, payload) {
    state.isProcessing = payload.isProcessing
  },
  setIsFirstRun (state, payload) {
    state.isFirstRun = payload.isFirstRun
  },
  pushInteraction (state, payload) {
    state.interactionHistory.push(payload.interaction)
  },
  clearSelectOutput (state, payload) {
    const deletedComponents = payload.deletedComponents
    state.interactionHistory.filter(interaction => {
      if (deletedComponents.includes(interaction.output.component)) {
        interaction.output = {}
      }
    })
  },
  clearOutput (state) {
    state.interactionHistory.forEach(interaction => {
      interaction.isVisible = false
    })
  }
}

const actions = {
  runCommand ({ commit }, payload) {
    const directory = state.currentNode.name
    const context = {
      directory
    }

    const command = payload.command

    const bins = Object.keys(mapping)
    const [bin, ...argv] = command.split(' ')

    const input = {
      command
    }
    const output = {}

    if (bins.includes(bin)) {
      if (mapping[bin].isLongTerm) {
        commit('setIsProcessing', {
          isProcessing: true
        })
      }

      output.component = mapping[bin].component
      output.argv = argv
    } else {
      output.component = mapping.bad.component
      output.argv = [bin]
    }

    commit('pushInteraction', {
      interaction: {
        context,
        input,
        output,
        isVisible: true
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
