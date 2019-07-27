class DigitPairsSummator {

  constructor() {
    this.digits = [0]
  }
  
  next(digitA, digitB) {
    let [ high, ...rest ] = this.digits
    
    let sum = high + digitA + digitB

    this.digits = sum < 10
      ? [ 0, sum, ...rest ]
      : [ 1, sum - 10, ...rest ]
    
    return this
  }

  result() {
    return this.digits.length > 1 && this.digits[0] == 0 ? this.digits.slice(1) : this.digits
  }
}

function toDigitsArray(value) {
  
  return value.split('')
    .map(char => parseInt(char, 10))
}

function bigIntSum(valueA, valueB) {
  const digitsA = toDigitsArray(valueA)
  const digitsB = toDigitsArray(valueB)

  const summator = new DigitPairsSummator()

  while (digitsA.length > 0 || digitsB.length > 0) {
    
    summator.next(
      digitsA.pop() || 0,
      digitsB.pop() || 0)
  }

  return summator.result().join('')
}


module.exports = {
  DigitPairsSummator,
  toDigitsArray,
  bigIntSum
}