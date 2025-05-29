import { useState, useContext } from 'react';
import style from './FormLivro.module.css'
import { api } from '../api/setupApi'
import { useNavigate } from 'react-router-dom'
import { LivroContext } from '../contexts/LivroContext';


export function FormLivro() {

    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { addLivro } = useContext(LivroContext);

    const [formLivro, setFormLivro] = useState({ titulo: '', autor: '', editora: '', ano: '' })

    async function handlerSalvar(e) {
        e.preventDefault()

        try {
            const response = await api.post('/livros', formLivro)
            console.log('Livro salvo com sucesso:', response.data);
            setMessage('Livro salvo com sucesso')
           addLivro({id: response.data, ...formLivro});

           setTimeout(()=>{
                navigate('/');
           },1500)
           
        } catch (error) {
            console.error('Erro ao salvar livro:', error.response?.data || error.message);
        }
        setFormLivro({ titulo: '', autor: '', editora: '', ano: '' })

    }


    return (
        <div className={style.formContainer}>
            <h1>CADASTRAR NOVO LIVRO</h1>
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
                    name="ano"
                    value={formLivro.ano}
                    onChange={(e) => setFormLivro({ ...formLivro, ano: e.target.value })}
                />

                <button onClick={handlerSalvar}>Salvar</button>
            </form>
        </div>
    );
}
