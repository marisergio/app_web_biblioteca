import { NavLink } from 'react-router-dom'
import style from '../App.module.css'
import { CardList } from './CardList'

export function Main({ livrosFiltrados }) {


  return (
    <main className={style.content}>
      <h2>Acervo</h2>
      <NavLink to="/formLivro">+ Livro</NavLink>
      <div className={style.bookList}>
        {livrosFiltrados.map(livro => (
          <CardList
            ano={livro.ano}
            autor={livro.autor}
            titulo={livro.titulo}
            key={livro.id}
            id={livro.id}
            className={style.book}
          />
        ))}
      </div>
    </main>)
}