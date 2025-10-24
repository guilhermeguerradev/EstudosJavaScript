module.exports = class Installments {
    value
    installmentNumber
    status
    constructor(value, installmentNumber) {
        this.value = value
        this.installmentNumber = installmentNumber
        this.status = "pending"

    }

}