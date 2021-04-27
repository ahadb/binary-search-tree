import BinarySearchTree from './BinarySearchTree';

const bst = new BinarySearchTree();

bst.add(9);
bst.add(22);
bst.add(16);
bst.add(19);
bst.add(12);

console.log('FIND 100:', bst.search(100));
console.log('FIND 22:', bst.search(22));
console.log('FIND 16:', bst.search(16));
console.log('FIND 19:', bst.search(19));
console.log('FIND 12:', bst.search(12));
