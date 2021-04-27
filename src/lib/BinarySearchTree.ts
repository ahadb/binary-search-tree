import TreeNode from "./TreeNode";

/**
 *                  10  (root = 8)
 *               /     \
 *             8        25
 *           /   \    /    \
 *          6    12   15    30
 *           \
 *            7
 *
 */

/**
 * @description Class BST (Binary Search Tree)
 */
export default class BinarySearchTree {
  public root: TreeNode = null;

  /**
   * @method: {Public}
   * @param {value: number}
   * @return void
   */
  public add(value: number): void {
    const node: TreeNode = new TreeNode(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      let currentTreeNode: TreeNode = this.root;

      while (currentTreeNode) {
        if (value > currentTreeNode.value) {
          if (currentTreeNode.right === null) {
            currentTreeNode.right = node;
            return;
          }

          currentTreeNode = currentTreeNode.right;
        } else {
          if (currentTreeNode.left === null) {
            currentTreeNode.left = node;
            return;
          }

          currentTreeNode = currentTreeNode.left;
        }
      }
    }
  }

  /**
   * @method: {Public}
   * @param {value: number}
   * @return void
   */
  public search(value: number): number {
    let currentTreeNode: TreeNode = this.root;

    while (currentTreeNode) {
      if (value === currentTreeNode.value) {
        return value;
      } else if (value > currentTreeNode.value) {
        currentTreeNode = currentTreeNode.right;
      } else {
        currentTreeNode = currentTreeNode.left;
      }
    }

    return null;
  }

  /**
   * @method: {Public}
   * @param {value: number}
   * @return void
   */
  public delete(value: number): void {
    this.root = this.deleteRecursively(this.root, value);
  }

  /**
   * @method: {Private}
   * @param {root: any, value: number}
   * @return TreeNode
   */
  private deleteRecursively(root: TreeNode, value: number): TreeNode {
    if (root === null) {
      return null;
    }

    if (root.value === value) {
      root = this.deleteTreeNode(root);
    } else if (value < root.value) {
      root.left = this.deleteRecursively(root.left, value);
    } else {
      root.right = this.deleteRecursively(root.right, value);
    }

    return root;
  }

  /**
   * @method: {Private}
   * @param {root: any}
   * @return TreeNode
   */
  private deleteTreeNode(root: TreeNode): TreeNode {
    if (root.left === null && root.right === null) {

      return null;
    } else if (root.left !== null && root.right !== null) {

      const successorTreeNode = this.getSuccessor(root.left);
      const successorValue = successorTreeNode.value;

      root = this.deleteRecursively(root, successorValue);
      root.value = successorValue;

      return root;
    } else if (root.left !== null) {

      return root.left;
    }

    return root.right;
  }

  /**
   * @method: {Private}
   * @param {node: TreeNode}
   * @return TreeNode
   */
  private getSuccessor(node: TreeNode): TreeNode {
    let currentTreeNode: TreeNode = node;

    while (currentTreeNode) {
      if (currentTreeNode.right === null) {
        break;
      }

      currentTreeNode = currentTreeNode.right;
    }

    return currentTreeNode;
  }

  /**
   * @method: {Public}
   * @param none
   * @return Boolean
   */
  public isEmpty(): boolean {
    return this.root === null;
  }
}

