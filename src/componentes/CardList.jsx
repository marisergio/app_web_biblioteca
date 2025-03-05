import style from './CardList.module.css';
export function CardList(props) {
    return (
        <div className={style.bookCard}>
            <p>{props.titulo}</p>
            <p>{props.autor}</p>
        </div>
    )
}