import { Mortgage } from '../src/mortgage'

const RATE = 0.02 // 2%
const LOAN = 30000 // dollars
const TERM = 36 // months
const MORTGAGE = new Mortgage({ rate: RATE, loan: LOAN, term: TERM })
const ROUNDED_PAYMENT = 1177
const ENDING_PERIOD = 6
const ROUNDED_BALANCE = 26360
const ROUNDED_TOTAL_PAYMENT = 7062
const ROUNDED_CUMULATIVE_PRINCIPAL_PAYMENT = 3640
const ROUNDED_CUMULATIVE_INTEREST_PAYMENT = 3422

describe('Mortgage class', () => {
  test(`per period payment is ${ROUNDED_PAYMENT} rounded.`, () => {
    expect(Math.round(MORTGAGE.getPayment)).toBe(ROUNDED_PAYMENT)
  })

  test(`balance ending at ${ENDING_PERIOD} is ${ROUNDED_BALANCE} rounded.`, () => {
    expect(Math.round(MORTGAGE.remainingMortgageBalance(ENDING_PERIOD))).toBe(ROUNDED_BALANCE)
  })

  test(`total paid at ${ENDING_PERIOD} is ${ROUNDED_TOTAL_PAYMENT} rounded.`, () => {
    expect(Math.round(MORTGAGE.totalPayment(ENDING_PERIOD))).toBe(ROUNDED_TOTAL_PAYMENT)
  })

  test(`cumulative principal paid at ${ENDING_PERIOD} is ${ROUNDED_CUMULATIVE_PRINCIPAL_PAYMENT} rounded.`, () => {
    expect(Math.round(MORTGAGE.cumulativePrincipalPayment(ENDING_PERIOD))).toBe(
      ROUNDED_CUMULATIVE_PRINCIPAL_PAYMENT
    )
  })

  test(`cumulative principal paid at ${ENDING_PERIOD} is ${ROUNDED_CUMULATIVE_INTEREST_PAYMENT} rounded.`, () => {
    expect(Math.round(MORTGAGE.cumulativeInterestPayment(ENDING_PERIOD))).toBe(
      ROUNDED_CUMULATIVE_INTEREST_PAYMENT
    )
  })
})
