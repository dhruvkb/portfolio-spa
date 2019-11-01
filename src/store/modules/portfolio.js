import { generateTree } from '@/data/portfolio/tree'

import { mapping } from '@/templates/Portfolio/commands'

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

    state.tree.traverseBreadthFirst(node => {
      if (node.name === nodeName || node.alternativeName === nodeName) {
        nodeInQuestion = node
      }
    })

    return nodeInQuestion
  },
  nodeLocatedAt: state => path => {
    let nodeInQuestion = state.currentNode
    let pathEntities = path.split('/')

    for (let i = 0; i < pathEntities.length; i++) {
      let entity = pathEntities[i]

      if (entity === '~') {
        nodeInQuestion = state.tree.root
      } else if (entity === '.') {
        // Do nothing as . refers to current directory
      } else if (entity === '..') {
        nodeInQuestion = nodeInQuestion.parent
      } else {
        let nextNode
        for (let j = 0; j < nodeInQuestion.children.length; j++) {
          let child = nodeInQuestion.children[j]
          if (child.name === entity || child.alternativeName === entity) {
            nextNode = child
          }
        }
        if (nextNode === undefined) {
          return null
        } else {
          nodeInQuestion = nextNode
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
  resetState (state) {
    state.tree = null
    state.currentNode = null
    state.interactionHistory = []
    state.isProcessing = false
  },
  setTree (state, payload) {
    state.tree = generateTree(payload.fs)
    state.currentNode = state.tree.root
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
  clearOutput (state) {
    state.interactionHistory.forEach(interaction => {
      interaction.isVisible = false
    })
  }
}

const actions = {
  runCommand ({ commit }, payload) {
    let command = payload.command

    let [bin, ...argv] = command.split(' ')

    let directory = state.currentNode.name

    let input = {
      command,
      directory
    }
    let output = {}

    let bins = Object.keys(mapping)
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
