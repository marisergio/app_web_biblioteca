
import style from  './App.module.css'
import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import { CardList } from './componentes/CardList'

function App() {

  const livros = [
    { id: 1, titulo: 'Clean Architecture', autor: 'Robert C. Martin', ano: 2017 },
    { id: 2, titulo: 'The Pragmatic Programmer', autor: 'Andrew Hunt e David Thomas', ano: 1999 },
    { id: 3, titulo: 'Padrões de Projeto: Elementos Reutilizáveis de Software Orientado a Objetos', 
      autor: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', ano: 1994 },
    { id: 4, titulo: 'Arquitetura de Software na Prática', autor: 'Len Bass, Paul Clements, Rick Kazman', ano: 2012 },
    { id: 5, titulo: 'Domain-Driven Design: Tackling Complexity in the Heart of Software', autor: 'Eric Evans', ano: 2003 },
    { id: 6, titulo: 'Construindo Arquiteturas Evolutivas', autor: 'Neal Ford, Rebecca Parsons, Patrick Kua', ano: 2017 },
    { id: 7, titulo: 'Refatoração: Aperfeiçoando o Design de Código Existente', autor: 'Martin Fowler', ano: 1999 },
    { id: 8, titulo: 'Fundamentos da Arquitetura de Software', autor: 'Mark Richards, Neal Ford', ano: 2020 },
    { id: 9, titulo: 'Conceitos de Sistemas de Banco de Dados', autor: 'Abraham Silberschatz, Henry Korth, S. Sudarshan', ano: 2010 },
    { id: 10, titulo: 'Linhas de Produto de Software: Práticas e Padrões', autor: 'Paul Clements, Linda Northrop', ano: 2001 }
];



  return (
    <div>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <main className={style.content}>
          <h2>Acervo</h2>
          <div className={style.bookList}>
            {livros.map(livro => (
              <CardList 
                ano={livro.ano}
                autor={livro.autor} 
                titulo={livro.titulo} 
                key={livro.id} 
                className={style.book} 
              />
            ))}
            </div>
        </main>
       
      </div>
    </div>
  )
}

export default App
