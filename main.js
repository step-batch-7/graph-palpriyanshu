const {readFileSync} = require('fs');

const {bfs} = require('./src/graph');

const main = function(){
  const content = readFileSync("bfs.txt","utf8").split("\n"); 
  const pairs =content.map(row => row.split("|").slice(1,3).map(node => node.trim())); 
  const source = "mm";
  const target = "jj";
  const isPath = bfs( pairs, source, target)
  console.log(isPath)
}

main();

