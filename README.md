# Binary Search Tree

Binary Search Tree (BST) in TypeScript. There are many different types of tree structures, however a BST follows these rules

* all values of the right subtree of a node must be greater than the node value itself
* all values of the left subtree of a node must be less than the node value itself.

Take the following example:

```bash
     9
    / \
   /   \
  6     \
 / \     15
3   8     \
           \
           16
```

1. The root value for this tree is 9 and the root’s right child value is 15 which is greater than the root value. 
> As we travel farther down the right subtree, we see that all the values in the right subtree are greater than the root node value. 

2. The root’s left child value is 6 which is less than the root value. 
>As we travel down the left subtree, we see that all the values in the left subtree are less than the root node value. These rules may be applied to all of the nodes in the tree recursively.

## Usage

```bash
$ git clone {repo}
$ npm install
$ cd src/lib
$ ts-node example.ts
```

## Credits

* This project uses [TypeScript Starter](https://github.com/bitjson/typescript-starter)
* Some verbiage conceptually from `README.md` is extracted from Trekhleb's JavaScript Alogrithms book

