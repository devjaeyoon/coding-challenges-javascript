/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (node === null) {
    return null;
  }

  const cloned = new Map();

  const dfs = (current) => {
    if (cloned.has(current)) {
      return cloned.get(current);
    }

    const copy = new Node(current.val);
    cloned.set(current, copy);

    for (const neighbor of current.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return dfs(node);
};
