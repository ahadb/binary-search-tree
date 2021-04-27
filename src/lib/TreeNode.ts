/**
 * @description Class based interface
 */
export default class TreeNode {
  public left: TreeNode = null;
  public right: TreeNode = null;

  constructor(
    public value: number
  ) { }
}
