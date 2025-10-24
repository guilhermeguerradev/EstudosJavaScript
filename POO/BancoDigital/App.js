const User = require("./entities/User")
const Loan = require("./entities/Loan")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        if (!userExists) {
        this.#users.push(new User(email, fullname))
        }
  }

    static makeDeposity(email, value) {
        const user = App.findUser(email)
        if (user) {
            user.account.makeDeposity(value)
        }
    }

    static takeLoan(email, value, installments) {
        const user = App.findUser(email)
        if (user) {
            user.account.takeLoan(value, installments)
        }
    }

    static makeTransfer(emailOriginUser, emailDestinationUser, value) {
        const originUser = App.findUser(emailOriginUser)
        const destinationUser = App.findUser(emailDestinationUser)

        if (originUser && destinationUser) {
            originUser.account.registerTransfer(originUser, destinationUser, value)
            destinationUser.account.registerTransfer(originUser, destinationUser, value)
            
        }
    }

    static updateLoanInterestRate(newPercentage) {
        Loan.setInterestRate(newPercentage)

    }
    


}