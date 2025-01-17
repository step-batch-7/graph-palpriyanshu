const assert = require('chai').assert;

const {bfs} = require("../src/graph");

describe("BFS",function() {
  const pairs = [["India", "Pakistan"],["India","Nepal"],["India", "China"],["Nepal","China"],["Pakistan","China"]];

  it("should give true if two node connected perfectly", function(){
    assert.ok(bfs(pairs, "India","Pakistan"))
  })

  it("should give false if source has no path to target", function(){
    assert.notOk(bfs(pairs, "china","Pakistan"))
  })
  
  it("should give true for single node connected to itself", function(){
    const routes = [["aa","aa"]];
    assert.ok(bfs(routes, "aa","aa"))
  })

  it("should give false for single node not connected to itself", function(){
    const routes = [["aa","bb"]];
    assert.notOk(bfs(routes, "aa","aa"))
  })

  it("should give false for two nodes not connected", function(){
    const routes = [["aa","bb"],["aa","cc"]];
    assert.notOk(bfs(routes, "bb","cc"))
  })

  it("should give false if source is not present", function(){
    const routes = [["aa","bb"],["aa","cc"]];
    assert.notOk(bfs(routes, "dd","cc"))
  })

  it('three nodes moderately connected', function () {
    const routes = [ ['aa', 'bb'], ['bb', 'cc'], ['cc', 'bb'] ];
    assert.isTrue(bfs(routes, 'aa', 'bb'));
    assert.isTrue(bfs(routes, 'bb', 'cc'));
    assert.isTrue(bfs(routes, 'aa', 'cc'));
    assert.isTrue(bfs(routes, 'cc', 'bb'));
    assert.isTrue(bfs(routes, 'cc', 'cc'));
    assert.isTrue(bfs(routes, 'bb', 'bb'));
    assert.isFalse(bfs(routes, 'bb', 'aa'));
    assert.isFalse(bfs(routes, 'aa', 'aa'));
  });
});