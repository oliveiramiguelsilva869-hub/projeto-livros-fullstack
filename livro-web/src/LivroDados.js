import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';

const controleLivros = new ControleLivros();

const LivroDados = () => {
    // Definindo os estados para os campos do formulário
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const navigate = useNavigate();

    // Função para tratar o envio do formulário
    const incluir = async (event) => {
        event.preventDefault();
        // Criando o objeto livro (o _id é nulo pois o MongoDB gerará um automático)
        const novoLivro = {
            _id: null,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n') // Transforma o texto em um array de autores
        };

        const sucesso = await controleLivros.incluir(novoLivro);
        if (sucesso) {
            navigate('/'); // Redireciona para o catálogo após salvar
        }
    };

    return (
        <main className="container mt-4">
            <h1 className="mb-4">Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label text-start d-block">Título</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">Resumo</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        value={resumo} 
                        onChange={(e) => setResumo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-start d-block">Autores (um por linha)</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        value={autores} 
                        onChange={(e) => setAutores(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;