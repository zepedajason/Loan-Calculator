
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 2,
    rate: 1,
  };
  expect(calculateMonthlyPayment(values)).toEqual('42.10')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12345,
    years: 3,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('369.99');
});


