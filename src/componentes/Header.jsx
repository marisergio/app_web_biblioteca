import { useContext } from 'react';
import { LivroContext } from '../contexts/LivroContext';
import style from './Header.module.css';

export function Header() {

      const { setFiltro } = useContext(LivroContext)

    function filtrar(event) {
        event.preventDefault();
        const filtro = event.target.filtrar.value;
        console.log(filtro);
        event.target.filtrar.value = '';

    }

    return (
        <header className={style.header}>
            <h1 className={style.appName}>LITERA</h1>
            <div className={style.headerRight}>
                <div className={style.searchBar}>
                    <form onSubmit={filtrar}>
                        <input
                            name="filtrar"
                            type="text"
                            placeholder="Pesquisar..."
                            onChange={(e) => {
                                event.target.setCustomValidity('');
                                setFiltro(e.target.value)
                            }}
                            onInvalid={(e) => e.target.setCustomValidity('Digite algo para pesquisar')}
                            required
                        />
                    </form>
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