import assert from 'assert'

const nodeType = Object.freeze({
  FOLDER: 'folder',
  FILE: 'file'
})

/**
 * A class that implements one node in a file-system tree. Each node may either
 * be a file or a folder and may have children if it is a folder.
 */
class Node {
  /**
   * Create a new object of class Node.
   *
   * @constructor
   * @constructs {Node}
   *
   * @param {string} type - whether the node represents a file or a folder
   * @param {string} icon - the icon associated with the Node
   * @param {string} name - the name of the Node
   * @param {Array} aliases - the list of alternative names of the Node
   */
  constructor (type, icon, name, aliases = []) {
    assert(Object.values(nodeType).includes(type))
    this.type = type

    this.icon = icon
    this.name = name
    this.aliases = aliases

    this.parent = null
    this.children = []
  }

  /**
   * Check if the given name is either the primary name of the current node or
   * one of its aliases.
   *
   * @param {string} name - the name which is to be checked for a match
   * @returns {boolean} whether the given name is one of the Node's valid names
   */
  hasName (name) {
    return this.name === name || this.aliases.includes(name.toLocaleLowerCase())
  }

  /**
   * Make the current node the root node of the tree. The property of a root
   * node is to be its own parent, essentially allowing infinite upward
   * traversal.
   */
  makeRoot () {
    this.parent = this
  }

  /**
   * Add the given node to the as a child of the current node. Also updates the
   * reference to the parent node in the child object.
   *
   * @param {Node} node - the node to as a child of the current node
   */
  appendChild (node) {
    this.children.push(node)
    node.parent = this
  }

  /**
   * Traverse the tree using the DFT algorithm. This may contribute to a loss
   * in performance but it requires less code.
   *
   * The argument to the function is a function that accepts a node and returns
   * a Boolean value, which if falsy, stops further traversal.
   *
   * @param {function} func - the function to execute on each node
   */
  traverse (func) {
    let shouldContinue = func(this)
    if (!shouldContinue) {
      return shouldContinue
    }

    this.children.every(child => {
      shouldContinue = child.traverse(func)
      return shouldContinue
    })
    return shouldContinue
  }

  /**
   * Determine whether this node represents a file system folder.
   *
   * @return {boolean} whether this node represents a file system folder
   */
  isFolder () {
    return this.type === nodeType.FOLDER
  }

  /**
   * Determine whether this node represents a file system file.
   *
   * @return {boolean} whether this node represents a file system file
   */
  isFile () {
    return this.type === nodeType.FILE
  }
}

/**
 * Parse the file system tree, given as a plain old JavaScript object into a
 * tree of Node objects with richer functionality.
 *
 * @param {Object} pojo - the file system tree parsed from JSON
 * @return {Node} the root node of the Node tree generated from the object
 */
function parse (pojo) {
  const node = new Node(
    pojo.type,
    pojo.icon,
    pojo.name,
    pojo.aliases
  )
  if (pojo.children && pojo.children instanceof Array) {
    pojo.children.forEach(childPojo => {
      node.appendChild(parse(childPojo))
    })
  }
  return node
}

export {
  parse
}
