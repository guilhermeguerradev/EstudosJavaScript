# 📚 BookStore – Estudos de Programação Orientada a Objetos (POO) em JavaScript

Este projeto faz parte dos meus **estudos de POO com JavaScript (ES6+)**, dentro da pasta **`POO`** do repositório [EstudosJavaScript](https://github.com/guilhermeguerradev/EstudosJavaScript).  
O objetivo é **praticar os principais pilares da orientação a objetos** na construção de uma aplicação simples: uma **livraria** com autores, livros, usuários e pedidos.

---

## 🧠 Objetivo Didático

Aprender e aplicar, na prática, os **4 pilares da POO**:

1. **Abstração** → Representar objetos do mundo real (Livro, Autor, Usuário, Pedido).  
2. **Encapsulamento** → Proteger os dados usando atributos privados e métodos de acesso.  
3. **Herança** → Reaproveitar código entre classes com características semelhantes.  
4. **Polimorfismo** → Permitir que métodos se comportem de formas diferentes conforme o objeto.

---

## 🏗️ Estrutura do Projeto

```
bookStore/
├── entities/
│   ├── Author.js      # Classe que representa um autor
│   ├── Book.js        # Classe que representa um livro
│   ├── Poster.js      # Classe que representa um pôster
│   ├── Order.js       # Classe que representa um pedido
│   └── User.js        # Classe que representa um usuário
│
├── Database.js        # "Banco de dados" em memória (simulado)
├── App.js             # Classe principal que gerencia o sistema
└── index.js           # Ponto de entrada para executar e testar o app
```

---

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/guilhermeguerradev/EstudosJavaScript.git
   cd EstudosJavaScript/POO/bookStore
   ```

2. Execute o projeto com Node.js:
   ```bash
   node index.js
   ```

---

## 🧩 Classes e Responsabilidades

### 🔸 `Author`
Representa o autor de uma obra.  
Propriedades:
- `name`
- `nationality`
- `bio`

### 🔸 `Book`
Representa um livro na loja.  
Propriedades:
- `title`, `genre`, `pages`, `price`, `inStock`  
Métodos:
- `addToStock(qtd)` → adiciona livros ao estoque.  
- `removeFromStock(qtd)` → remove livros do estoque.

### 🔸 `Poster`
Classe semelhante a `Book`, usada para representar pôsteres (demonstra **reuso e polimorfismo**).

### 🔸 `User`
Representa o cliente da loja, com dados básicos como `name`, `email` e `password`.

### 🔸 `Order`
Simula um pedido feito por um usuário.  
Relaciona **usuário + itens + quantidade + preço final**.

### 🔸 `Database`
Simula um banco de dados usando objetos JavaScript.  
Possui métodos `saveBook()`, `saveUser()`, `find()`, `addBooksToStock()` etc.  
👉 Aqui é possível entender o conceito de **encapsulamento** e **controle de acesso aos dados**.

### 🔸 `App`
Classe principal que integra todas as entidades e o "banco".  
Permite criar usuários, autores, livros e pedidos.  
👉 É onde os objetos se **comunicam** — aplicando o conceito de **associação entre classes**.

---

## 💡 Conceitos de POO Praticados

| Conceito | Aplicação no Projeto |
|-----------|---------------------|
| **Classe** | Criação de `Book`, `User`, `Order`, `Author`, etc. |
| **Objeto** | Instâncias concretas criadas no `index.js`. |
| **Encapsulamento** | Uso de campos privados e métodos controladores no `Database`. |
| **Associação** | `Order` contém `User` e `Book`. |
| **Abstração** | Cada classe modela um elemento real (livro, autor, pedido). |
| **Reuso** | Classes modulares, exportadas e reutilizadas pelo `App`. |
| **Polimorfismo** | Métodos que variam conforme a classe (ex.: `addToStock` em Book e Poster). |

---

## 🧪 Exemplo de Uso

```js
const App = require('./App')

const app = new App()

// Cria autor
app.createAuthor("George Orwell", "Britânico", "Autor de 1984 e A Revolução dos Bichos."

// Cria livro
app.createBook("1984", "Distopia política", "Ficção", 328, "George Orwell", "Clássico literário", 39.90, 5)

// Lista todos os livros
console.log(app.getAuthors())
console.log(app.getUsers())
```

---

## 🚀 Aprendizados

Com este projeto foi possível praticar:

- Estruturação de um sistema orientado a objetos em JavaScript.
- Separação de responsabilidades entre classes.
- Modularização e uso de `require()` / `module.exports`.
- Lógica de estoque, pedidos e cadastro.
- Aplicação real dos conceitos teóricos de POO.

---

