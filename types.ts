export interface NodeType {
  val: number,
  next: null | NodeType
}

export class ListNode implements NodeType {
  val: number;
  next: null | NodeType;

  constructor(val?: number, next?: NodeType){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export class TreeNode {
  val: number;
  left: null | TreeNode;
  right: null | TreeNode;

  constructor(val?: number, left?: TreeNode, right?: TreeNode){
    this.val = (val === undefined ? 0 : val);
    this.left = (!left ? null : left);
    this.right = (!right ? null : right);
  }
}