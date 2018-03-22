var countWords = function(sentence) {
  return sentence.split(" ").length;
};


describe("countWords", function() {
  it("should count a single word", function() {
    expect(countWords("a")).toBe(1);
  });

  it("should count multiple words", function() {
    expect(countWords("This is a sentence.")).toBe(4);
  });

  it("should count an empty string as 0, but wrong", function() {
    expect(countWords("")).toBe(0);
  });

  it("should ignore punctuation, but wrong", function() {
    expect(countWords("this , that , hhahhaha")).toBe(3);
  });
});
