module.exports = function getZerosCount(number) {
  // your implementation

  function calc(num) {
    let res = 0;
    while(num >= 5) {
        num/=5;
        res+=Math.floor(num);
    }
    return res;
};
  return calc(number);
};
