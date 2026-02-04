const Livro = require('./livro-schema');

// d. Função obterLivros (Retorna todos os livros)
const obterLivros = async () => {
    return await Livro.find();
};

// e. Função incluir (Cria um novo livro no MongoDB)
const incluir = async (livro) => {
    return await Livro.create(livro);
};

// f. Função excluir (Remove um livro pelo _id)
const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo });
};

module.exports = { obterLivros, incluir, excluir };