export class TransactionAPI {
    static BASE_URL = 'http://localhost:3000/transactions'

    static async getAll() {
        try {
            const response = await fetch(this.BASE_URL)

            if (!response.ok) {
                throw new Error(`Erro ao buscar transações: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('Não foi possível carregar as transações. Verifique a conexão com o servidor.', error)
            return []
        }
    }

    static async create(data) {
        try {
            const response = await fetch(this.BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error(`Erro ao criar transação: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('Erro ao criar a transação. Tente novamente.', error)
            return null
        }
    }

    static async update(id, data) {
        try {
            const response = await fetch(`${this.BASE_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error(`Erro ao atualizar transação: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('Erro ao atualizar a transação.', error)
            return null
        }
    }

    static async delete(id) {
        try {
            const response = await fetch(`${this.BASE_URL}/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error(`Erro ao deletar transação: ${response.status}`)
            }

            return true
        } catch (error) {
            console.error('Erro ao deletar a transação.', error)
            return false
        }
    }
}
