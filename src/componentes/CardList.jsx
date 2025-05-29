import style from './CardList.module.css';

import { useContext } from 'react';
import { LivroContext } from '../contexts/LivroContext';


export function CardList(props) {

    const { deletarLivro } = useContext(LivroContext);

      function handleExcluir(id) {
        const confirmar = confirm('Tem certeza que deseja excluir este livro?');
        if (confirmar) {
            deletarLivro(id);
        }
    };

    return (
        <div className={style.bookCard}>
            <p className={style.titulo}><strong>{props.titulo}</strong></p>
            <p>{props.autor}</p>
            <p className={style.ano}>Ano de publicação: {props.ano}</p>

            <div className={style.actions}>
                <button className={style.btnEditar} onClick={()=>{}}>Editar</button>
                <button className={style.btnExcluir} onClick={()=>handleExcluir(props.id)}>Excluir</button>
            </div>
        </div>
    );
}