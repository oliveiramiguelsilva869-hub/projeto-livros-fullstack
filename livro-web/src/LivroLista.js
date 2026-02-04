import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';

// Instanciando o controlador para usar as funções do Back-end
const controleLivros = new ControleLivros();

const LivroLista = () => {
    // Estado para armazenar a lista de livros
    const [livros, setLivros] = useState([]);
    // Estado para garantir que a tela atualize após carregar
    const [carregado, setCarregado] = useState(false);

    // useEffect para buscar os livros assim que a tela abrir
    useEffect(() => {
        controleLivros.obterLivros().then((dados) => {
            setLivros(dados);
            setCarregado(true);
        });
    }, [carregado]);

    // Função para excluir um livro e atualizar a tela
    const excluir = async (id) => {
        await controleLivros.excluir(id);
        setCarregado(false); // Força o useEffect a rodar de novo
    };

    return (
        <main className="container mt-4">
            <h1 className="text-center mb-4">Catálogo de Livros</h1>
            <table className="table table-hover table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <tr key={livro._id}>
                            <td>{livro.titulo}</td>
                            <td>{livro.resumo}</td>
                            <td>
                                <ul className="list-unstyled">
                                    {livro.autores.map((autor, index) => (
                                        <li key={index}>{autor}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    onClick={() => excluir(livro._id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;