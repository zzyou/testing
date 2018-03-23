function flipCoin() {
  var num = Math.floor(Math.random() * 2);
  if (num === 0) {
    return "head";
  }
  return "tail";
}

describe("flipCoin", function() {
  it("will not be null", function() {
      expect(flipCoin()).not.toBeNull;
  });

  it("either head or tail", function() {
      expect(flipCoin()).toMatch(/head|tail/);
  });
});
