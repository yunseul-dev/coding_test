/** 트리란?
 * 정점(Vertex)을 간선(Edge)으로 이어놓은 자료 구조
 * 방향 그래프: 정점을 잇는 간선들이 방향성을 가지는 그래프
 * 무방향 그래프에서 차수의 합 = 모든 간선 수 * 2
 * 가중치: 그래프에서 특정 정점으로부터 인접한 다른 정점으로 갈 때의 비용
 * 연결 그래프: 서로 다른 두 정점에 대해 경로가 존재하는 그래프
 * 비 연결 그래프(단절 그래프): 서로 다른 두 정점에 대해 경로가 존재하지 않는 그래프
 * 완전 그래프: 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프
 */

/** 트리랑 그래프랑 차이가 뭐예요?
 * 트리는 루트 노드가 존재, 그래프는 루트 노드가 없음
 * 트리는 부모-자식의 개념이 존재, 그래프는 부모-자식 개념이 없음
 * 트리는 방향 그래프이지만, 그래프는 방향 또는 무방향 그래프
 * 트리는 사이클이 불가능,그래프는 사이클이 가능(자기 자신과도 가능)
 * 트리는 두 노드 간의 경로가 하나, 그래프는 두 노드 간의 경로가 2개 이상 가능
 * 트리는 족보/조직도 등에서 사용, 그래프는 지하철 노선도/지도/수강신청 선수 과목에서 사용
 */

/**
 * 인접 행렬: 각 정점과 간선으로 이루어진 그래프 연결 관계를 배열로 구현해낸 것
 * 무방향 그래프는 인접 행렬로 표현 시 대칭성을 이룬다
 * 방향 그래프는 인접 행렬로 표현 시 대칭성을 이루지 않는다.
 */

class Graph {
  constructor() {
    this.size = 5;

    this.adj = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => 0)
    );
  }

  get(from, to) {
    console.log(`[GET]: from = ${from} to = ${to}`);

    if (this.adj[from][to] !== 0) {
      console.log(this.adj[from][to]);
    } else {
      console.log('Not found');
    }
  }

  set(from, to, value) {
    console.log(`[SET]: from = ${from} to = ${to} value = ${value}`);

    if (this.adj[from][to] !== 0) {
      console.log('Already exists!');
    } else {
      // 방향 그래프인 경우
      this.adj[from][to] = value;

      // 무방향 그래프인 경우
      // this.adj[to][from] = value;
    }
  }

  remove(from, to) {
    console.log(`[REMOVEE]: from = ${from} to = ${to}`);

    if (this.adj[from][to] !== 0) {
      this.adj[from][to] = 0;
    } else {
      console.log('Not found!');
    }
  }

  print() {
    console.log(`[PRINT]`);
    console.log(this.adj);
  }

  clear() {
    console.log(`[CLEAR]`);
    this.adj = Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => 0)
    );
  }
}

const graph = new Graph();

graph.set(0, 1, 1);
graph.set(0, 3, 1);
graph.set(0, 4, 1);
graph.set(3, 0, 1);
graph.set(3, 3, 1);

graph.print();

graph.get(0, 1);
graph.get(0, 2);
graph.get(0, 21);

graph.remove(0, 2);
graph.print();

graph.remove(0, 1);
graph.print();

graph.clear();
graph.print();
