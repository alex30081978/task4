const { bigIntSum } = require('.')

const TEST_VALUES = [
  { valueA: '0', valueB: '0' },
  { valueA: '0', valueB: '1' },
  { valueA: '9', valueB: '9' },
  { valueA: '5', valueB: '55' },
  { valueA: '0', valueB: '34674239' },
  { valueA: '92387593485793475934', valueB: '34095823405894305345' }
]

TEST_VALUES.forEach(test)

function test({ valueA, valueB }) {
  const testedResult = bigIntSum(valueA, valueB)
  const expectedResult = BigInt(valueA) + BigInt(valueB)

  console.log(`${valueA} + ${valueB} = ${testedResult} (${expectedResult})`)
}