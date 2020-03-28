let BinarySearchTree = require('./BST');

inOrder = (node, values=[]) => {

    if (node.left != null) {
        values = inOrder(node.left, values);
    }
    values.push(node.key);

    if (node.right != null) {
        values = inOrder(node.right, values);
    }
    return values;
}

preOrder = (node, values=[]) => {
  values.push(node.key);

  if (node.left != null) {
    values = preOrder(node.left, values);
  }

  if (node.right != null) {
      values = preOrder(node.right, values);
  }
  return values;
}

postOrder = (node, values=[]) => {
  
  if (node.left != null) {
    values = postOrder(node.left, values);
  }

  if (node.right != null) {
      values = postOrder(node.right, values);
  }

  values.push(node.key);

  return values;
}

const BST = new BinarySearchTree();
// BST.insert('F');
// BST.insert('B');
// BST.insert('A');
// BST.insert('D');
// BST.insert('C');
// BST.insert('E');
// BST.insert('G');
// BST.insert('I');
// BST.insert('H');

const data = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22];
data.forEach(item => BST.insert(item));
console.log(inOrder(BST));
console.log(preOrder(BST));
console.log(postOrder(BST));


