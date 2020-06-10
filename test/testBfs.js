const assert = require('chai').assert;

const {bfs} = require("../src/graph");

describe("BFS",function() {
  const pairs = [["India", "Pakistan"],["India","Nepal"],["India", "China"],["Nepal","China"],["Pakistan","China"]];

  it("should give true if source has path to target", function(){
    assert.ok(bfs(pairs, "India","Pakistan"))
  })

  it("should give false if source has no path to target", function(){
    assert.notOk(bfs(pairs, "china","Pakistan"))
  })
});