import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>Minha Logo</div>
            <div className={style.headerRight}>
            <div className={style.searchBar}>
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className={style.profileMenu}>
                <button className={style.profileButton}>Perfil</button>
                <div className={style.dropdown}>
                <a href="#">Alterar Senha</a>
                <a href="#">Sair</a>
            </div>
            </div>
            </div>

        </header>
    )
}