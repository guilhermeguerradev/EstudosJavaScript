module.exports = class Transfer {
    #originUser
    #destinationUser
    #value
    #createAt

    constructor(originUser, destinationUser, value) {
        this.#originUser = originUser
        this.#destinationUser = destinationUser
        this.#value = value
        this.#createAt = new Date()
    }

    getOriginUser() {
        return this.#originUser
    }

    getDestinationUser() {
        return this.#destinationUser
    }

    getValue() {
        return this.#value
    }

    getCreateAt() {
        return this.#createAt
    }
}