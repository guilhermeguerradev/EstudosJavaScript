# 🧱 Exercício 17 — Estruturando um Projeto Moderno

Este exercício mostra como configurar um **projeto moderno de JavaScript**, utilizando **npm**, **Babel** e **Webpack** para organizar, compilar e empacotar o código.  
O objetivo é entender como essas ferramentas trabalham juntas para criar um ambiente profissional de desenvolvimento front-end.

---

## 📦 npm — Gerenciador de Pacotes

### 🧠 O que é
O **npm (Node Package Manager)** é o **gerenciador de pacotes** do Node.js.  
Ele é responsável por **instalar bibliotecas**, **gerenciar dependências** e **automatizar tarefas** através dos scripts definidos no arquivo `package.json`.

### ⚙️ Como utilizar
1. **Inicializar o projeto**
   ```bash
   npm init -y
   ```
   → Cria o arquivo `package.json` com as informações do projeto.

2. **Instalar dependências**
   ```bash
   npm install --save-dev webpack webpack-cli @babel/core @babel/preset-env babel-loader mini-css-extract-plugin css-loader
   ```
   → Adiciona as bibliotecas necessárias para usar o Webpack e o Babel.

3. **Executar scripts**
   No `package.json`, você pode definir scripts como:
   ```json
   "scripts": {
     "build": "webpack --config webpack.config.js",
     "dev": "webpack --mode development --watch"
   }
   ```
   Depois, execute no terminal:
   ```bash
   npm run build
   ```
   → Gera a versão final do projeto na pasta `dist/`.

---

## 🧠 Babel — Transpilador de JavaScript

### 🧾 O que é
O **Babel** é um **transpilador** que converte código moderno ES6+ (com `let`, `const`, `class`, `arrow functions`, `import/export`, etc.)  
em **código compatível com navegadores antigos (ES5)**.  
Isso garante que seu projeto funcione em praticamente qualquer ambiente.

### ⚙️ Como utilizar
1. **Instalar o Babel**
   ```bash
   npm install --save-dev @babel/core @babel/preset-env babel-loader
   ```

2. **Configurar o Babel**
   Crie um arquivo `.babel.config.js` na raiz do projeto:
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```
   Esse preset adapta automaticamente o código às versões mais adequadas de JavaScript.

3. **Integrar com o Webpack**
   Dentro do `webpack.config.js`, adicione:
   ```js
   {
     test: /\.js$/,
     exclude: /node_modules/,
     use: { loader: 'babel-loader' }
   }
   ```
   Assim, o Webpack enviará os arquivos `.js` para o Babel processar antes de empacotar.

---

## ⚙️ Webpack — Empacotador de Módulos

### 🧾 O que é
O **Webpack** é uma ferramenta que **empacota** todos os arquivos do projeto (JS, CSS, imagens, etc.)  
em um ou mais **bundles otimizados** para execução no navegador.

Com ele, é possível:
- Transformar código modular (`import/export`);
- Compilar CSS e JavaScript modernos;
- Otimizar e minificar os arquivos para produção.

### ⚙️ Como utilizar
1. **Instalar o Webpack**
   ```bash
   npm install --save-dev webpack webpack-cli mini-css-extract-plugin css-loader
   ```

2. **Criar o arquivo de configuração (`webpack.config.js`)**
   ```js
   const path = require('path');
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');

   module.exports = {
     entry: './src/main.js',
     mode: 'production',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'main.bundle.min.js'
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: { loader: 'babel-loader' }
         },
         {
           test: /\.css$/,
           use: [MiniCssExtractPlugin.loader, 'css-loader']
         }
       ]
     },
     plugins: [
       new MiniCssExtractPlugin({ filename: 'main.bundle.min.css' })
     ]
   };
   ```

3. **Gerar o build**
   ```bash
   npm run build
   ```
   → Cria a pasta `dist/` com os arquivos otimizados.

---

## 📁 Estrutura Final do Projeto
```
estruturando-projeto-moderno/
├── src/
│   └── main.js
├── dist/
│   └── (arquivos gerados pelo Webpack)
├── .babel.config.js
├── webpack.config.js
├── package.json
└── README.md
```

---

## ✅ Conceitos-Chave
| Ferramenta | Função Principal |
|-------------|------------------|
| **npm** | Gerencia pacotes e scripts do projeto |
| **Babel** | Converte código moderno ES6+ em código compatível |
| **Webpack** | Empacota e otimiza todos os arquivos do projeto |

