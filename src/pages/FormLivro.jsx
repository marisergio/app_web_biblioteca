import { useState, useContext, useEffect } from 'react';
import style from './FormLivro.module.css'
import { api } from '../api/setupApi'
import { useNavigate } from 'react-router-dom'
import { LivroContext } from '../contexts/LivroContext';
import { useParams } from "react-router-dom";


export function FormLivro() {

    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { addLivro, atualizarLivro } = useContext(LivroContext);
    const { id } = useParams();

    const [formLivro, setFormLivro] = useState({ titulo: '', autor: '', editora: '', anoLancamento: '' })

    useEffect(() => {
        async function fetchLivro() {
            if (id) {
                try {
                    const response = await api.get(`/livros/${id}`);
                    console.log('Livro carregado para edição:', response.data);
                    setFormLivro(response.data);
                } catch (error) {
                    console.error('Erro ao buscar livro:', error);
                }
            }
        }

        fetchLivro();
    }, [id]);

    async function handlerSalvar(e) {
        e.preventDefault()

        try {
            const response = await api.post('/livros', {
                ...formLivro,
                anoLancamento: Number(formLivro.anoLancamento)
            })
            setMessage('Livro salvo com sucesso')
            addLivro({ id: response.data, ...formLivro });

            setTimeout(() => {
                navigate('/');
            }, 1500)

        } catch (error) {
            console.error('Erro ao salvar livro:', error.response?.data || error.message);
        }
        setFormLivro({ titulo: '', autor: '', editora: '', anoLancamento: '' })

    }

    async function handlerAtualizar(e) {
        e.preventDefault()

        try {
            await atualizarLivro(id, {
                ...formLivro,
                anoLancamento: Number(formLivro.anoLancamento)
            });
            setMessage('Livro atualizado com sucesso!');

            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {
            console.error('Erro ao atualizar livro:', error.response?.data || error.message);
        }
    }

    return (
        <div className={style.formContainer}>
            <h1>{id ? 'EDITAR LIVRO' : 'CADASTRAR LIVRO'}</h1>
            <p>{message}</p>
            <form>
                <label>Título</label>
                <input
                    name="titulo"
                    value={formLivro.titulo}
                    onChange={(e) => setFormLivro({ ...formLivro, titulo: e.target.value })}
                />

                <label>Autor</label>
                <input
                    name="autor"
                    value={formLivro.autor}
                    onChange={(e) => setFormLivro({ ...formLivro, autor: e.target.value })}
                />

                <label>Editora</label>
                <input
                    name="editora"
                    value={formLivro.editora}
                    onChange={(e) => setFormLivro({ ...formLivro, editora: e.target.value })}
                />

                <label>Ano Publicação</label>
                <input
                    type="number"
                    name="ano"
                    value={formLivro.anoLancamento}
                    onChange={(e) => setFormLivro({ ...formLivro, anoLancamento: e.target.value })}
                />

                <button onClick={id ? handlerAtualizar : handlerSalvar}>Salvar</button>
            </form>
        </div>
    );
}
