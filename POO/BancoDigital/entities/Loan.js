const Installment = require("./Installments")

module.exports = class Loan {
    static #interestRate = 1.05

    #value
    #createAt
    #installments

    constructor(value, installments) {

        this.#value = value
        this.#createAt = new Date()
        this.#installments = []
        for (let i = 1; i <= installments; i++) {
            this.#installments.push(new Installment((value / installments) / Loan.#interestRate, i))
        }
    }

    getValue() {
        return this.#value
    }

    getCreateAt() {
        return this.#createAt
    }

    getInstallments() {
        return this.#installments
    }




    static getInterestRate() {
        return Loan.#interestRate
    }

    static setInterestRate(interestRate) {
        Loan.#interestRate = 1 + (interestRate / 100)
    }
}