import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <a className={style.menuItem}>Início</a>
            <a className={style.menuItem}>Acervo</a>
            <a className={style.menuItem}>Leitores</a>
            <a className={style.menuItem}>Relatórios</a>
           
        </aside>
    )
}