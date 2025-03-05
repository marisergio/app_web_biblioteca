import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <a className={style.menuItem}>Home</a>
            <a className={style.menuItem}>Sobre</a>
            <a className={style.menuItem}>Serviços</a>
            <a className={style.menuItem}>Contato</a>
           
        </aside>
    )
}