function Add(numStr) {
  if (numStr === '') {
    return 0;
  }
  numArr = numStr.split(',');
  var total = 0;
  for (let num of numArr) {
    total += parseFloat(num);
  };
  return total;
}


describe ("Add", function() {
  it("should return 0 if an empty string", function() {
    expect(Add("")).toBe(0);
  });

  it("should return the argument if one num", function() {
    expect(Add("4")).toBe(4);
  });

  it("should return sum if two nums", function() {
    expect(Add("1,5")).toBe(6);
  });
});
