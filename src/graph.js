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
  if(pairs.length == 1 && source == target && pairs[0][0] != pairs[0][1]){
    return false;
  }
  const paths = parseList(pairs);
  let toVisit = [source];
  const visited = [];
  while(toVisit.length){
    const node = toVisit.shift();
    if(node == target){
      return true;
    }
    visited.push(node);
    if(paths[node]){
      toVisit = toVisit.concat(paths[node].filter(n => !toVisit.includes(n) && !visited.includes(n)));
    }
  }
  return false;
};

module.exports = {bfs};
