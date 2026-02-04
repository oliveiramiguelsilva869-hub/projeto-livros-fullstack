const banco = require('mongoose');

// Versões novas não precisam mais de options. 
// Se o erro persistir com 'localhost', troque por '127.0.0.1'
banco.connect('mongodb://localhost:27017')
  .then(() => console.log("SUCESSO: Conectado ao MongoDB!"))
  .catch((err) => console.log("ERRO de conexão: " + err));

module.exports = banco;