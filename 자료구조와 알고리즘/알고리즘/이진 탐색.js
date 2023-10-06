/** 이진 탐색(Binary Search)이란?
 * 원소가 정렬되어 있는 배열에서 특정한 값을 찾아내는 알고리즘
 * 이진 탐색은 정렬된 리스트에만 사용할 수 있다는 단점이 있지만
 * 이진 탐색을 진행할 때마다 탐색 범위가 절반으로 줄어들기 때문에 속도가 빠르다는 장점이 존재한다.
 */
/** 이진 탐색 방법
 * 이진 탐색은 배열의 중간 값과 찾고자 하는 값(Target)을 비교하여 왼쪽을 탐색할 지 오른쪽을 탐색할 지 결정
 * 따라서 중간 값을 찾아야 하기 때문에 반드시 정렬된 배열에서만 사용 가능
 *
 * 1. 배열의 중간 값을 선택
 * 2. 중간 값과 찾고자 하는 값(Target)을 비교
 *  2-1. Target이 중간 값과 같다면 탐색 종료(mid == target)
 *  2-2. Target이 중간에 있는 값보다 작으면 중간 값을 기준으로 좌측의 원소들을 대상으로 탐색(mid > target)
 *  2-3. Target이 중간에 있는 값보다 크면 중간 값을 기준으로 우측의 원소들을 대상으로 탐색(mid < target)
 * 3. 값을 찾을 때까지 2번 과정을 반복
 */

/**Q1.
 * 찾아야 할 값 target과 정렬된 배열이 주어질 때, target이 배열에서 위치하는 index를 반환해보자.
 * 이때 배열 내에 targetㄱ밧이 없을 때는 배열이 정렬된 상태로 target이 들어가야 할 index를 반환해보자.
 */

function binarySearch1(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  // floor  내림
  /**
   * m
   * s e
   * 1 2 -> (0 + 1) / 2 -> floor(0.5) = 0
   */
  // ceil  올림
  /**
   *   m
   * s e
   * 1 2 -> (0 + 1) / 2 -> ceil(0.5) = 1
   */
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log(`start: ${start} mid: ${mid} end: ${end}`);

    /**
     * target = 5
     *
     * 1.  s  m     e
     *     1, 3, 5, 6
     * 2.       s,m e
     *     1, 3, 5, 6
     */
    if (arr[mid] == target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  /**
   * target = 7
   *
   * 1.  s  m     e
   *     1, 3, 5, 6
   * 2.      [s,m] e
   *     1, 3, 5, 6
   * 3.         [s,m e]
   *     1, 3, 5, 6
   * 4.           e s   // start가 end를 넘어서게 됨
   *     1, 3, 5, 6
   */
  return start;
}

let arr1 = [1, 3, 5, 6];
// let target = 5;
// let target = 7;
// let target = 2;
let target = 0;

let idx1 = binarySearch1(arr1, target);
// console.log(idx1);

/**Q2.
 * N개의 원소가 주어지고 원소에 값 M이 몇 개가 존재하는지 확인해보자.
 */

// LIS 알고리즘

// target이 배열 내에서 처음으로 나타나는 위치
function lower_bound(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let pos = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      pos = mid; // 현재 위치가 target이 나온 가장 왼쪽 위치라고 가정
      end = mid - 1; // 추가로 왼쪽 구역을 탐색하여 target이 있나 확인
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return pos;
}

// target이 배열 내에서 마지막으로 나타나는 위치
function upper_bound(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let pos = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      pos = mid; // 현재 위치가 target이 나온 가장 오른쪽 위치라고 가정
      start = mid + 1; // 추가로 더 오른쪽에 target이 있나 확인
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return pos;
}

let N = 10;

let arr = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3];
// let M = 10;
let M = -10;

// 이진 탐색의 조건: 정렬된 배열에서 해야한다.
arr = arr.sort((a, b) => a - b);
console.log(arr);
let lowerPos = lower_bound(arr, M);
console.log(lowerPos);

let upperPos = upper_bound(arr, M);
console.log(upperPos);

console.log(upperPos - lowerPos + 1);
