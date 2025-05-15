import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <NavLink className={style.menuItem} to="/">Início</NavLink>
            <a className={style.menuItem} to="/">Acervo</a>
            <NavLink className={style.menuItem} to="/leitor">Leitores</NavLink>
            <a className={style.menuItem}>Relatórios</a>
           
        </aside>
    )
}