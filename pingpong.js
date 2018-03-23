function Add(numStr) {
  if (numStr === '') {
    return 0;
  }
  var numArr = numStr.split(/[,\n]/);

  // var total = 0;
  // for (let num of numArr) {
  //   total += parseFloat(num);
  // };
  // return total;

  var total = numArr.reduce((accu, curr) => {
    return parseFloat(accu) + parseFloat(curr);
  }, 0);
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

  it("should handle an unknown amount of numbers", function() {
    expect(Add("1,2,3,4,5")).toBe(15);
    expect(Add("1,5,6")).toBe(12);
  });

  it("should handle new lines between numbers", function() {
    expect(Add("1\n2,3")).toBe(6);
  });

});
