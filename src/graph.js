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

const dfs = function(graph, source, target, visited){
  const neighbours = (graph[source] || []).slice();
  if(visited.includes(source)){
    return false;
  } 

  visited.push(source);
  if(neighbours.includes(target)){
    return true;
  }

  while(neighbours.length){
    const toVisit = neighbours.pop();
    return dfs(graph, toVisit, target, visited);
  }
}

module.exports = {bfs, dfs, parseList};
