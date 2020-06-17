const assert = require('chai').assert;

const {dfs, parseList} = require("../src/graph");

describe("DFS",function() {
  const pairs = [["India", "Pakistan"],["India","Nepal"],["India", "China"],["Nepal","China"],["Pakistan","China"]];
  const graph = parseList(pairs);

  it("should give true if two node connected perfectly", function(){
    assert.ok(dfs(graph, "India","Pakistan",[]))
  })

  it("should give false if source has no path to target", function(){
    assert.notOk(dfs(graph, "china","Pakistan",[]))
  })
  
  it("should give true for single node connected to itself", function(){
    const pairs = [["aa","aa"]];
    const graph = parseList(pairs);
    assert.ok(dfs(graph, "aa","aa",[]))
  })

  it("should give false for single node not connected to itself", function(){
    const pairs = [["aa","bb"]];
    const graph = parseList(pairs);
    assert.notOk(dfs(graph, "aa","aa",[]))
  })

  it("should give false for two nodes not connected", function(){
    const pairs = [["aa","bb"],["aa","cc"]];
    const graph = parseList(pairs);
    assert.notOk(dfs(graph, "bb","cc",[]))
  })

  it('three nodes moderately connected', function () {
    const pairs = [ ['aa', 'bb'], ['bb', 'cc'], ['cc', 'bb'] ];
    const graph = parseList(pairs);
    assert.isTrue(dfs(graph, 'aa', 'bb',[]));
    assert.isTrue(dfs(graph, 'bb', 'cc',[]));
    assert.isTrue(dfs(graph, 'aa', 'cc',[]));
    assert.isTrue(dfs(graph, 'cc', 'bb',[]));
    assert.isTrue(dfs(graph, 'cc', 'cc',[]));
    assert.isTrue(dfs(graph, 'bb', 'bb',[]));
    assert.isFalse(dfs(graph, 'bb', 'aa',[]));
    assert.isFalse(dfs(graph, 'aa', 'aa',[]));
  });
});