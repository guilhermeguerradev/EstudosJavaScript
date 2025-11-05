export class Transaction {
    constructor({ id, name, amount }, onEdit, onDelete) {
        this.id = id
        this.name = name
        this.amount = amount
        this.onEdit = onEdit
        this.onDelete = onDelete
    }

    createContainer() {
        const container = document.createElement('div')
        container.classList.add('transaction')
        container.id = `transaction-${this.id}`
        return container
    }

    createTitle() {
        const span = document.createElement('span')
        span.textContent = this.name
        span.classList.add('transaction-title')
        return span
    }

    createAmount() {
        const span = document.createElement('span')
        span.classList.add('transaction-amount')

        const formater = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            compactDisplay: 'long'
        })

        const formatedAmount = formater.format(this.amount)
        if (this.amount > 0) {
            span.textContent = `${formatedAmount} C`
            span.classList.add('credit')
        } else {
            span.textContent = `${formatedAmount} D`
            span.classList.add('debit')
        }

        return span
    }

    createEditButton() {
        const btn = document.createElement('button')
        btn.classList.add('edit-btn')
        btn.textContent = 'Editar'
        btn.addEventListener('click', () => this.onEdit(this))
        return btn
    }

    createDeleteButton() {
        const btn = document.createElement('button')
        btn.classList.add('delete-btn')
        btn.textContent = 'Deletar'
        btn.addEventListener('click', () => this.onDelete(this.id))
        return btn
    }

    render() {
        try {
            const container = this.createContainer()
            container.append(
                this.createTitle(),
                this.createAmount(),
                this.createEditButton(),
                this.createDeleteButton()
            )
            document.querySelector('#transactions').append(container)
        } catch (error) {
            console.error('Erro ao renderizar transação:', error)
        }
    }
}
