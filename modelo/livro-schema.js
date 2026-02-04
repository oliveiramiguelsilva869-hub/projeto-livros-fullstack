const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
});

// Associa o schema à coleção 'livros'
const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;