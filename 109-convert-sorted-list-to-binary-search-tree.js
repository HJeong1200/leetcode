var sortedListToBST = function (head) {
  if (!head) return null;

  const arr = getArrayFromList(head);
  const tree = new TreeNode();

  getBST(arr, tree);

  return tree;
};

const getArrayFromList = (head) => {
  const arr = [];

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  return arr;
};

const getBST = (arr, tree) => {
  const mid = Math.floor((arr.length - 1) / 2);

  tree.val = arr[mid];

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid + 1);

  if (leftArr.length) {
    tree.left = new TreeNode();
    getBST(leftArr, tree.left);
  }

  if (rightArr.length) {
    tree.right = new TreeNode();
    getBST(rightArr, tree.right);
  }
};
