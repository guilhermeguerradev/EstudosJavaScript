module.exports = class Deposity {
    #value
    #createAt

    constructor(value) {
        this.#value = value
        this.#createAt = new Date()
    }

    getValue() {
        return this.#value
    }

    getCreateAt() {
        return this.#createAt
    }

}