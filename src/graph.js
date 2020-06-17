const parseList = function(list){
  const routes = {}
  list.forEach(([source, destination]) => {
    if(!routes.hasOwnProperty(source)){
      routes[source] = [];
    }
    routes[source].push(destination);
  });
  return routes;
}

const bfs = function(pairs,source,target){
  const paths = parseList(pairs);
  let toVisit = paths[source] || [];
  const visited = new Set();
  while(toVisit.length){
    const node = toVisit.shift();
    if(node == target){
      return true;
    }
    visited.add(node);
    if(paths[node]){
      toVisit = toVisit.concat(paths[node].filter(n => !toVisit.includes(n) && !visited.has(n)));
    }
  }
  return false;
};

const dfs = function (graph, source, target, visited) {
  const neighbours = (graph[source] || []).slice();
  if (neighbours.includes(target)) {
    return true;
  }
  visited.push(source);
  while (neighbours.length) {
    const toVisit = neighbours.shift();
    if (!visited.includes(toVisit) && dfs(graph, toVisit, target, visited)) {
      return true;
    }
  }
  return false;
};

module.exports = {bfs, dfs, parseList};
