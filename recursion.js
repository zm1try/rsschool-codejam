function treeToArray(crntArr,nodesArr) {
    let nextNodesArr = [];
    const crntNodeValue = [];
    nodesArr.map(node => {
        crntNodeValue.push(node.value);
        if(node.left) nextNodesArr.push(node.left);
        if(node.right) nextNodesArr.push(node.right);
    });
    crntArr.push(crntNodeValue);
    if (nextNodesArr.length) return treeToArray(crntArr, nextNodesArr);
    return crntArr;
}
const recursion = root => treeToArray([],[root]);