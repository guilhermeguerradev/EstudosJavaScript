// Importa o CSS (Webpack cuidará disso)
import './style.css';

// Define a função hello() — precisa estar no escopo global
window.hello = function() {
    alert('Testando função Hello!');
};

// Apenas para teste visual
console.log('Webpack rodando com sucesso!');