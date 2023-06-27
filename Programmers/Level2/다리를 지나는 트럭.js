function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  let queue = Array.from({ length: bridge_length }, () => 0); //다리 길이만큼 0 채운 큐
  let sum = 0; // 현재 다리큐에 들어가 있는 트럭 무게

  //모두 다리를 건널 때 까지 반복
  while (truck_weights.length > 0 || sum > 0) {
    answer++; //1초 지날때
    sum = sum - queue.pop(); //다리위에 있던 것 중 제일 마지막 삭제 ( 다리 무게 감소)

    //다리위의 무게와 대기하던 트럭 중 첫번째를 더했을 때 견딜수 있는 무게보다 적으면
    if (sum + truck_weights[0] <= weight) {
      queue.unshift(truck_weights.shift()); //대기하고 있던 트럭 무게를 다리에 삽입 (앞에)
      sum += queue[0]; //다리위의 무게 증가
    } else {
      //더 트럭 못 올리면 0으로 채움
      queue.unshift(0);
    }
  }

  return answer;
}
