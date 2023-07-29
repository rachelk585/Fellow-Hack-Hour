// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { hasCycle } = require(`../challenges${version}/linked-list-cycle.js`);

function ListNode(val) {
  this.val = val;
  this.next = null;
}

describe('linkedListCycle tests', () => {

  it('identifies non-cycling linked lists', () => {
    const list1 = new ListNode(1);
    expect(hasCycle(list1)).toEqual(false);
    
    list1.next = new ListNode('apple');
    expect(hasCycle(list1)).toEqual(false);
    
    list1.next.next = new ListNode(true);
    expect(hasCycle(list1)).toEqual(false);
  });

  it('identifies cycling linked lists #1', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);

    node1.next = node2;
    node2.next = node1;
    expect(hasCycle(node1)).toEqual(true);

  });

  it('identifies cycling linked lists #2', () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    node1.next = node2;
    node2.next = new ListNode(0);
    node2.next.next = new ListNode(-4);
    node2.next.next.next = node2;

    expect(hasCycle(node1)).toEqual(true);
  });
});