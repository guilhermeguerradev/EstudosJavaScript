# 🧩 Programação Orientada a Objetos com JavaScript (ES6+)

Este projeto demonstra os **conceitos fundamentais de POO (Programação Orientada a Objetos)** aplicados em **JavaScript moderno (ES6+)**, utilizando **classes, herança, encapsulamento, composição e modularização**.

A aplicação cria dinamicamente elementos HTML (como formulários, labels e inputs) através de **objetos reutilizáveis e estruturados**, mostrando como o JavaScript pode ser usado de forma orientada a objetos também no front-end.

---

## 🚀 Tecnologias Utilizadas

- **JavaScript ES6+**
- **HTML5**
- **Módulos ECMAScript (`import/export`)**
- **DOM API nativa**
- **Encapsulamento com campos privados (#)**

---

## 🧠 Conceitos de POO Demonstrados

### 🔹 1. Classe
Cada componente do projeto é representado por uma **classe** (`Component`, `Form`, `Input`, `Label`), que define o comportamento e propriedades de um tipo de elemento HTML.

```js
export class Component {
  #element = null // atributo privado

  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }
}
```

---

### 🔹 2. Encapsulamento
O atributo `#element` é **privado**, protegendo o acesso direto ao elemento HTML interno.  
Isso garante que a manipulação só aconteça através dos **métodos públicos**, como `getElement()` e `render()`.

```js
getElement() {
  return this.#element
}
```

---

### 🔹 3. Herança
As classes `Form`, `Input` e `Label` **herdam** de `Component`, reutilizando o comportamento básico de criação e renderização.

```js
export class Input extends Component {
  constructor(parent, options) {
    super('input', parent, options)
  }
}
```

Assim, todos os componentes podem ser criados e renderizados da mesma forma, com consistência e simplicidade.

---

### 🔹 4. Composição
A classe `Form` agrega (ou compõe) outros componentes, como `Label` e `Input`, através do método `addChildren()`.

```js
form.addChildren(label, input)
```

Esse padrão representa a **composição de objetos**, onde um objeto maior é formado por outros menores, cada um com sua própria responsabilidade.

---

### 🔹 5. Modularização
Cada classe está em seu próprio arquivo e é exportada com `export` para ser reutilizada em outros módulos:

```
Component.js
Form.js
Input.js
Label.js
main.js
```

O arquivo `main.js` importa todas as classes e orquestra a criação dos componentes:

```js
import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"
```

---

## 🧩 Estrutura de Arquivos

```
📁 POO-JavaScript/
│
├── index.html
├── main.js
│
├── Component.js
├── Form.js
├── Input.js
└── Label.js
```

---

## ⚙️ Execução

1. Certifique-se de que o `index.html` contém:
   ```html
   <script src="main.js" type="module"></script>
   ```
2. Abra o arquivo `index.html` em um navegador.  
3. O JavaScript criará e renderizará os elementos HTML dinamicamente na página.

---

## 🧩 Exemplo de Funcionamento

```js
const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name' })

form.render()
label.render()
form.addChildren(input)
```

➡️ Resultado:  
Um formulário é criado dinamicamente no DOM, contendo um `label` e um `input`, sem nenhum HTML fixo.

---

## 💡 Conceitos Praticados

| Conceito | Descrição |
|-----------|------------|
| **Classe** | Define um modelo de objeto com atributos e métodos. |
| **Herança** | Permite que classes filhas reutilizem código da classe base. |
| **Encapsulamento** | Protege dados internos e expõe apenas o necessário. |
| **Composição** | Objetos que contêm outros objetos. |
| **Modularização** | Organização do código em múltiplos arquivos reutilizáveis. |

---

## 📘 Aprendizado

Este exercício mostra como aplicar **POO no front-end**, tornando o código mais organizado, reutilizável e fácil de manter.  
A ideia é tratar cada elemento da interface como um **objeto com comportamento próprio**, e não apenas como um trecho de HTML.
