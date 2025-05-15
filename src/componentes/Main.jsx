import style from  '../App.module.css'
import { CardList } from './CardList'

export function Main({livrosFiltrados}) {
    return(
        <main className={style.content}>
          <h2>Acervo</h2>
          <div className={style.bookList}>
            {livrosFiltrados.map(livro => (
              <CardList 
                ano={livro.ano}
                autor={livro.autor} 
                titulo={livro.titulo} 
                key={livro.id} 
                className={style.book} 
              />
            ))}
            </div>
        </main>)
}