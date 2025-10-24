const Deposity = require("./Deposity")
const Loan = require("./Loan")
const Transfer = require("./Transfer")




module.exports = class Account {
    #balance
    #deposits
    #loans
    #transfers
    #owner

    constructor(user) {
        this.#owner = user
        this.#balance = 0
        this.#deposits = []
        this.#loans = []
        this.#transfers = []
    }


    getBalance() {
        return this.#balance
    }

    getDeposits() {
        return this.#deposits
    }

    getLoans() {
        return this.#loans
    }

    getTransfers() {
        return this.#transfers
    }

    getOwner() {
        return this.#owner
    }

    makeDeposity(value) {
        const deposity = new Deposity(value)
        this.#deposits.push(deposity)
        this.#balance += value
    }

    takeLoan(value, installments) {
        const loan = new Loan(value, installments)
        this.#loans.push(loan)
        this.#balance += value
    }


    registerTransfer(originUser, destinationUser, value) {
        const transfer = new Transfer(originUser, destinationUser, value)
        if (originUser.email === this.#owner.email) {
            this.#balance -= transfer.getValue()
            this.#transfers.push(transfer)
        } else if (destinationUser.email === this.#owner.email) {
            this.#balance += transfer.getValue
            this.#transfers.push(transfer)
        }
    }
}