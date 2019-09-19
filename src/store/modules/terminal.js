import { generateTree } from '@/data/portfolio/tree'

import { mapping } from '@/components/Terminal/commands'

const state = {
  tree: null,
  currentNode: null,
  commandHistory: []
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

const actions = {}

const mutations = {
  resetState: state => {
    state.tree = null
    state.currentNode = null
    state.commandHistory = []
  },
  setTree: (state, payload) => {
    state.tree = generateTree(payload.fs)
    state.currentNode = state.tree.root
  },
  setCurrentNode: (state, payload) => {
    state.currentNode = payload.currentNode
  },
  runCommand: (state, payload) => {
    let command = payload.command

    let directory = state.currentNode.name

    let bins = Object.keys(mapping)
    let [bin, ...args] = command.split(' ')
    let output = {}
    if (bins.includes(bin)) {
      output.component = mapping[bin].component
      output.args = args
    } else {
      output.component = mapping.bad.component
      output.args = [bin]
    }

    state.commandHistory.push(
      {
        command,
        directory,
        output
      }
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
