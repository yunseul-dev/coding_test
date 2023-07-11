// 배열에서 단 한 번만 등장하는 항목 찾기

const findOnlyOnce = (arr, low, high) => {
  if (low > high) {
    return null;
  }
  if (low === high) {
    return arr[low];
  }

  let mid = Math.floor((high + low) / 2);

  if (mid % 2 === 0) {
    if (arr[mid] === arr[mid + 1]) {
      return findOnlyOnce(arr, mid + 2, high);
    } else {
      return findOnlyOnce(arr, low, mid);
    }
  } else {
    if (arr[mid] === arr[mid - 1]) {
      return findOnlyOnce(arr, mid + 1, high);
    } else {
      return findOnlyOnce(arr, low, mid - 1);
    }
  }
};

const findOnlyOnceHelper = (arr) => {
  return findOnlyOnce(arr, 0, arr.length);
};

// 배열의 길이로 어느쪽에 하나의 수가 있는지 찾는다.
// 시간 복잡도: O(log2n)
// 공간 복잡도: O(1)

console.log(findOnlyOnceHelper([1, 1, 3, 3, 5, 5, 7, 7, 8, 8, 9]));
