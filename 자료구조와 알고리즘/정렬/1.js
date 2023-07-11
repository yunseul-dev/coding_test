// 배열의 두 항목을 더해서 주어진 수가 될 수 있는지 확인하기

const findTwoSum = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }

  return false;
};
// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)

const findTwoSum2 = (array, sum) => {
  let store = {};

  for (let i = 0; i < array.length; i++) {
    if (store[array[i]]) {
      return true;
    } else {
      store[sum - array[i]] = array[i];
    }
  }

  return false;
};
// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
