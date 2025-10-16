import { createContext, useState, useEffect } from "react";
import { api } from '../api/setupApi'
import { ca } from "date-fns/locale";

export const LivroContext = createContext({
    livros: [],
    setLivros: () => { },
    deletarLivro: () => { },
    atualizarLivro: () => { },
    salvarLivro: () => { },
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


    async function salvarLivro(livro) {
        try {
            const response = await api.post('/livros', livro)
            console.log('Livro salvo:', {id: response.data, ...livro});
            setLivros(prev => {
            const novosLivros = [...prev, {id: response.data, ...livro}];
            return novosLivros.sort((a, b) => a.titulo.localeCompare(b.titulo));
        });

        } catch (error) {
            console.error('Erro ao salvar livro:', error.response?.data || error.message);
        }

    }

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

    async function deletarLivro(id) {

        try{
            const livrosFiltrados = livros.filter(livro => livro.id !== id);
            setLivros(livrosFiltrados);
            await api.delete(`/livros/${id}`);            
        }catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
            
    };

    return (
        <LivroContext.Provider value={{ livros, filtro, setFiltro, salvarLivro, deletarLivro, atualizarLivro }}>
            {children}
        </LivroContext.Provider>
    )
}