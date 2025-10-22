// Importa o módulo 'path' do Node.js, usado para trabalhar com caminhos de diretórios
const path = require('path');

// Importa o plugin responsável por extrair o CSS em um arquivo separado
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Exporta o objeto de configuração do Webpack
module.exports = {

  // 🔹 ENTRY: ponto de entrada da aplicação
  // É o primeiro arquivo que o Webpack vai ler (a partir dele, ele descobre e empacota todas as dependências)
  entry: {
    main: './src/main.js'  // "main" é o nome do bundle que será gerado
  },

  // 🔹 MODE: define o modo de build
  // 'production' = código minificado e otimizado
  // 'development' = código legível, ideal para desenvolvimento
  mode: 'production',

  // 🔹 OUTPUT: onde o Webpack vai salvar os arquivos processados
  output: {
    // Caminho absoluto da pasta de saída (usa 'path' pra evitar erros de caminho)
    path: path.resolve(__dirname, 'dist'),

    // Nome do arquivo final de JavaScript gerado
    // [name] pega o nome definido lá no "entry" (no caso, 'main')
    filename: '[name].bundle.min.js'
  },

  // 🔹 MODULE: define as regras para tratamento de diferentes tipos de arquivos
  module: {
    rules: [
      {
        // Essa regra se aplica a todos os arquivos .js
        test: /\.js$/,

        // Ignora a pasta node_modules (não queremos processar dependências externas)
        exclude: /node_modules/,

        // Define qual loader será usado — o Babel nesse caso
        use: {
          loader: 'babel-loader'  // Transpila código ES6+ para ES5 (compatível com navegadores antigos)
        },
      },
      {
        // Essa regra se aplica a todos os arquivos .css
        test: /\.css$/,

        // Define a ordem dos loaders:
        // 1️⃣ 'css-loader' → entende os imports e resolve dependências dentro do CSS
        // 2️⃣ 'MiniCssExtractPlugin.loader' → extrai o CSS em um arquivo separado
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }, // 👈 vírgula importante! fecha o bloco 'module' e separa do próximo

  // 🔹 PLUGINS: adiciona funcionalidades extras ao Webpack
  plugins: [
    // Cria um arquivo CSS separado (ex: 'main.bundle.min.css') com os estilos extraídos
    new MiniCssExtractPlugin({
      filename: '[name].bundle.min.css' // [name] corresponde ao nome do entry (main)
    })
  ]
};
