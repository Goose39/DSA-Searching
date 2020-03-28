let BinarySearchTree = require('./BST');

printOrder = (node, level) => {
  if (!node) {
    return;
  }
  if (level == 1) {
    console.log(node.value)
  } else if (level>1) {
    printOrder(node.left, level-1)
    printOrder(node.right, level-1)
  }
}

const BST = new BinarySearchTree();
BST.insert(20,'Captain Picard');
BST.insert(15,'Commander Riker');
BST.insert(10,'Lt. Cmdr. Worf');
BST.insert(16,'Lt. Cmdr. LaForge');
BST.insert(8,'Lieutenant security-officer');
BST.insert(25,'Commander Data');
BST.insert(30,'Lt. Crusher');
BST.insert(29,'Lieutenant Selar');

console.log(printOrder(BST, 4));



