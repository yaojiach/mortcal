export class Mortgage {
  rate: number
  loan: number
  term: number
  interestOnly: boolean
  points: number
  pointsAmount: number
  otherFees: number

  constructor(
    rate: number,
    loan: number,
    term: number,
    interestOnly = false,
    points = 0.0,
    otherFees = 0.0
  ) {
    this.rate = rate
    this.loan = loan
    this.term = term
    this.interestOnly = interestOnly
    this.points = points
    this.pointsAmount = points * loan
    this.otherFees = otherFees
  }

  get getPayment() {
    return this.interestOnly
      ? this.loan * this.rate
      : this.loan * (this.rate + this.rate / (Math.pow(1 + this.rate, this.term) - 1))
  }

  remainingMortgageBalance(endingPeriod: number): number {
    return endingPeriod === 0
      ? this.loan
      : this.remainingMortgageBalance(endingPeriod - 1) * (1 + this.rate) - this.getPayment
  }

  totalPayment(period: number) {
    return period * this.getPayment
  }

  cumulativePrincipalPayment(period: number) {
    return this.loan - this.remainingMortgageBalance(period)
  }

  cumulativeInterestPayment(period: number) {
    return this.interestOnly
      ? this.totalPayment(period)
      : this.totalPayment(period) - this.cumulativePrincipalPayment(period)
  }

  formatNumber(num: string | number) {
    return parseFloat(num.toString()).toFixed(2)
  }

  describe() {
    console.log('=============== Mortgage Summary Start ===============')
    console.log(`Interest Rate:          ${this.formatNumber(this.rate * 100)}%`)
    console.log(`Loan Amount:            $ ${this.formatNumber(this.loan)}`)
    console.log(`Loan Term:              ${this.term}`)
    console.log(`Interest Only:          ${this.interestOnly}`)
    console.log(`Points:                 ${this.points}`)
    console.log(`Other Fees:             ${this.otherFees}`)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(`Payment per Period:     $ ${this.formatNumber(this.getPayment)}`)
    return '=============== Mortgage Summary End   ==============='
  }
}
