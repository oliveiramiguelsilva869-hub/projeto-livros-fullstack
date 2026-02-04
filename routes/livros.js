const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota GET: raiz do segmento (retorna todos os livros)
router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

// Rota POST: raiz do segmento (inclui um novo livro)
router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ ok: true, mensagem: "Sucesso ao incluir!" });
    } catch (e) {
        res.json({ ok: false, mensagem: "Falha ao incluir" });
    }
});

// Rota DELETE: raiz concatenada ao código do livro (_id)
router.delete('/:id', async (req, res) => {
    try {
        await excluir(req.params.id);
        res.json({ ok: true, mensagem: "Sucesso ao excluir!" });
    } catch (e) {
        res.json({ ok: false, mensagem: "Falha ao excluir" });
    }
});

module.exports = router;