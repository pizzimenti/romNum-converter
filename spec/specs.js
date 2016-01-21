describe('romNumConverterter', function (){
  it("adds the value of all the symbols", function() {
    expect(romNumConverterter("MDCLXVI")).to.equal(1666)
  })
});
