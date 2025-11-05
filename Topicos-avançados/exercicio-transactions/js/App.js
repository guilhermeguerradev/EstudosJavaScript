import { Transaction } from './Transaction.js'
import { TransactionAPI } from './TransactionAPI.js'

export class App {
    static transactions = []

    static async init() {
        try {
            const results = await TransactionAPI.getAll()
            this.transactions.push(...results)

            this.transactions.forEach(t => this.renderTransaction(t))
            this.updateBalance()

            document.querySelector('form').addEventListener('submit', this.saveTransaction.bind(this))
        } catch (error) {
            console.error('Erro ao inicializar App:', error)
        }
    }

    static renderTransaction(data) {
        try {
            const transaction = new Transaction(
                data,
                this.editTransaction.bind(this),
                this.deleteTransaction.bind(this)
            )
            transaction.render()
        } catch (error) {
            console.error('Erro ao renderizar transação:', error)
        }
    }

    static async saveTransaction(ev) {
        ev.preventDefault()
        try {
            const id = document.querySelector('#id').value
            const name = document.querySelector('#name').value
            const amount = parseFloat(document.querySelector('#amount').value)

            if (id) {
                const updated = await TransactionAPI.update(id, { name, amount })
                const index = this.transactions.findIndex(t => t.id === id)
                this.transactions.splice(index, 1, updated)

                document.querySelector(`#transaction-${id}`).remove()
                this.renderTransaction(updated)
            } else {
                const created = await TransactionAPI.create({ name, amount })
                this.transactions.push(created)
                this.renderTransaction(created)
            }

            ev.target.reset()
            this.updateBalance()
        } catch (error) {
            console.error('Erro ao salvar transação:', error)
        }
    }

    static editTransaction(transaction) {
        try {
            document.querySelector('#id').value = transaction.id
            document.querySelector('#name').value = transaction.name
            document.querySelector('#amount').value = transaction.amount
        } catch (error) {
            console.error('Erro ao editar transação:', error)
        }
    }

    static async deleteTransaction(id) {
        try {
            await TransactionAPI.delete(id)

            document.querySelector(`#transaction-${id}`).remove()
            const index = this.transactions.findIndex(t => t.id === id)
            this.transactions.splice(index, 1)
            this.updateBalance()
        } catch (error) {
            console.error('Erro ao deletar transação:', error)
        }
    }

    static updateBalance() {
        try {
            const balanceSpan = document.querySelector('#balance')
            const total = this.transactions.reduce((sum, t) => sum + t.amount, 0)
            const formater = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                compactDisplay: 'long'
            })

            balanceSpan.textContent = formater.format(total)
        } catch (error) {
            console.error('Erro ao atualizar saldo:', error)
        }
    }
}
