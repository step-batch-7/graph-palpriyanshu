const parseList = function(list){
  const relations = {}
  list.forEach(([source, destination]) => {
    if(!relations.hasOwnProperty(source)){
      relations[source] = [];
    }
    relations[source].push(destination);
  });
  return relations;
}
const bfs = function(pairs,source,target){
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
      toVisit = toVisit.concat(paths[node].filter(n => toVisit && !toVisit.includes(n) && !visited.includes(n)));
    }
  }
  return false;
};
module.exports = {bfs};
