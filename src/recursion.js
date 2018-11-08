function treeToArray(result, nodesArr) {
  const children = [];
  result.push(nodesArr.map((node) => {
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
    return node.value;
  }));
  if (children.length) return treeToArray(result, children);
  return result;
}

function recursion(root) {
  return treeToArray([], [root]);
}

module.exports = recursion;
