import style from './CardList.module.css';
export function CardList(props) {
    return (
        <div className={style.bookCard}>
            <p className={style.titulo}><strong>{props.titulo}</strong></p>
            <p>{props.autor}</p>
            <p className={style.ano}>Ano de publicação: {props.ano}</p>
        </div>
    )
}