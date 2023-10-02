/**병합 정렬(Merge Sort)개념
 * 정렬할 원소들의 수가 하나가 될 때까지 반으로 나눈 후 정렬하면서 합쳐 나가는 알고리즘
 * 하나의 큰 문제를 두개의 작은 문제로 분할한 뒤
 * 합치는 과정에서 정렬을 진행하여 최종적으로 정렬을 완성하는 분할 정복 알고리즘(Divide and conquer algorithm)
 *
 * 병합 정렬 방법
 * 분할: 정렬할 배열을 나누어진 배열의 크기가 1이 될 때까지 재귀적으로 둘로 분할한다.
 * 정복: 분할 단계에서 만들어진 배열을 합치며 정렬해 나간다.
 */

class MergeSort {
  merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
      // left와 right 중 첫 번째 값이 작은 것부터 순서대로 sortedArr에 push 하면서 정렬하는 과정
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }

    // 만약 left가 [1,2] right가 [3,4]인 경우
    // left는 위의 while문에서 모두 sortedArr에 push 된 상황
    // 그러나 right는 하나도 push가 안 된 상황
    // 따라서 아래와 같이 spread syntax 둘 중 하나의 배열에만 원소가 남게 된다.
    return [...sortedArr, ...left, ...right];
  }

  sort(data) {
    // 배열의 길이가 1이 될 때까지 계속해서 재귀적으로 분할
    if (data.length === 1) {
      return data;
    }

    /**
     * [1,2,3,4,5,6,7]
     * mid = Math.ceil(7/2) = 4
     * left = data.slice(0,mid) = [1,2,3,4]
     * right = data.slice(mid) = [5,6,7]
     */
    const mid = Math.ceil(data.length / 2); // 올림

    const left = data.slice(0, mid);
    const right = data.slice(mid);

    /**
     * 원소가 1개가 될 때까지 재귀를 통해서 계속 진행한 후, left와 right부터 하나씩 merge를 해 나가는 방식
     * [4,3,2,1]이 있을 때
     * sort함수 재귀에 의해서 [4] [3] [2] [1]이 되고
     * [4] [3]과 [2] [1]이 merge 함수를 타면 [3,4] [1,2]가 될 것이고  *merge: 배열을 합쳐주면서 정렬
     * [3,4]와 [1,2]가 merge함수를 타면 [1,2,3,4]가 될 것이다.
     */

    return this.merge(this.sort(left), this.sort(right));
  }
}

const mergeSort = new MergeSort();
let arr = [29, 10, 14, 37, 8, 27];
console.log('notSorted: ', arr);
let sortedArr = mergeSort.sort(arr);
console.log('sortedArr: ', sortedArr);
