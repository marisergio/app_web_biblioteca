import { createContext, useState, useEffect } from "react";
import { api } from '../api/setupApi'

export const LivroContext = createContext({
    livros: [],
    setLivros: () => { },
    deletarLivro: () => { },
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

    function deletarLivro(id) {
        
            const livrosFiltrados = livros.filter(livro => livro.id !== id);
            setLivros(livrosFiltrados);

            //api.delete(`/livros/${id}`)
    };

    return (
        <LivroContext.Provider value={{ livros, filtro, setFiltro, addLivro, deletarLivro }}>
            {children}
        </LivroContext.Provider>
    )
}