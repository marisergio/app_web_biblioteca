import { createContext, useState, useEffect } from "react";
import { api } from '../api/setupApi'
import { ca } from "date-fns/locale";

export const LivroContext = createContext({
    livros: [],
    setLivros: () => { },
    deletarLivro: () => { },
    atualizarLivro: () => { },
    filtro: '',
    setFiltro: () => { }
});

export function LivroProvider({ children }) {
    const [filtro, setFiltro] = useState('')
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await api.get('/livros');
                console.log('Livros carregados:', response.data.livros);
                setLivros(response.data.livros);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        }

        fetchLivros();
    }, []);

    function addLivro(livro) {
        setLivros(prev => {
            const novosLivros = [...prev, livro];
            return novosLivros.sort((a, b) => a.titulo.localeCompare(b.titulo));
        });
    }

    async function deletarLivro(id) {

        try{
            const livrosFiltrados = livros.filter(livro => livro.id !== id);
            setLivros(livrosFiltrados);
            await api.delete(`/livros/${id}`);            
        }catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
            
    };

    async function atualizarLivro(id, dadosAtualizados) {
        try {
            const response = await api.put(`/livros/${id}`, dadosAtualizados);
            setLivros(prev => {
                return prev.map(livro => livro.id === id ? dadosAtualizados : livro);
            });
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    }

    return (
        <LivroContext.Provider value={{ livros, filtro, setFiltro, addLivro, deletarLivro, atualizarLivro }}>
            {children}
        </LivroContext.Provider>
    )
}