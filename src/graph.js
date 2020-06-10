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
  let toVisit = [source];
  const visited = [];
  while(toVisit.length){
    const node = toVisit.shift();
    const neighbours = paths[node] || [];
    if(neighbours.includes(target)){
      return true;
    }
    visited.push(node);
    toVisit = toVisit.concat(neighbours.filter(n => !toVisit.includes(n) && !visited.includes(n)));
  }
  return false;
};

module.exports = {bfs};
