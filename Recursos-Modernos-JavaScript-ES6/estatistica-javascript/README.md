# ⚙️ Recursos Modernos do JavaScript (ES6+)

Este projeto demonstra, na prática, o uso de **recursos modernos da linguagem JavaScript**, aplicados em funções matemáticas simples (média, mediana, moda, etc.).  
O foco principal não está nas fórmulas, mas nas **técnicas e sintaxes do ES6+** que tornam o código mais limpo, legível e funcional.

---

## 🧠 Recursos Aplicados

### 🔹 **Arrow Functions**
Funções anônimas de sintaxe curta, sem necessidade da palavra-chave `function`.

```js
const average = (...numbers) => numbers.reduce((a, n) => a + n, 0) / numbers.length
```

---

### 🔹 **Parâmetros Rest e Operador Spread**
- **Rest (`...args`)**: junta múltiplos parâmetros em um array.  
- **Spread (`...array`)**: expande arrays em elementos individuais.

```js
const sum = (...nums) => nums.reduce((a, b) => a + b, 0)
const sorted = [...nums].sort((a, b) => a - b)
```

---

### 🔹 **Desestruturação de Objetos e Arrays**
Permite extrair propriedades diretamente dos objetos ou elementos de arrays.

```js
const weightedSum = items.reduce((acc, { value, weight }) => acc + value * weight, 0)
```

---

### 🔹 **Encadeamento Opcional (`?.`)**
Evita erros de referência ao acessar propriedades que podem ser `undefined` ou `null`.

```js
console.log(results.mediaPonderada?.toFixed(2))
```

---

### 🔹 **Operador de Coalescência Nula (`??`)**
Define um valor padrão apenas quando algo é `null` ou `undefined` (diferente do `||`, que considera `0` e `""` como falsos).

```js
return weightedSum / (totalWeight ?? 1)
```

---

### 🔹 **Template Literals**
Strings com interpolação e múltiplas linhas, usando crases `` ` ``.

```js
console.log(`A média ponderada é ${weightedAverage(...valores).toFixed(2)}`)
```

---

### 🔹 **Funções de Alta Ordem**
Uso de métodos de array (`map`, `reduce`, `filter`, `forEach`, `sort`) que recebem funções como argumento.

```js
const mode = (...numbers) => {
  const frequency = {}
  numbers.forEach(num => frequency[num] = (frequency[num] ?? 0) + 1)
  const [most] = Object.entries(frequency).sort((a, b) => b[1] - a[1])
  return Number(most[0])
}
```

---

### 🔹 **Operador Ternário**
Substitui `if/else` simples em expressões curtas.

```js
const result = sorted.length % 2 === 0 ? average(sorted[mid - 1], sorted[mid]) : sorted[mid]
```

---

## 💡 Conclusão

O código mostra como **recursos modernos do ES6+** tornam o JavaScript mais expressivo e elegante.  
Essas técnicas são amplamente usadas em **projetos React, Node.js, e APIs modernas**, e dominar esse estilo é essencial para qualquer desenvolvedor atual.

---

## ✍️ Autor
**Guilherme Guerra**  
💻 [github.com/guilhermeguerradev](https://github.com/guilhermeguerradev)
