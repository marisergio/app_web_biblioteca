import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.appName}>LITERA</h1>
            <div className={style.headerRight}>
            <div className={style.searchBar}>
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className={style.profileMenu}>
                <button className={style.profileButton}>PERFIL</button>
                <div className={style.dropdown}>
                <a href="#">Alterar Senha</a>
                <a href="#">Sair</a>
            </div>
            </div>
            </div>

        </header>
    )
}