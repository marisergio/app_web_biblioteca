
import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { LivroContext } from './contexts/LivroContext'

function App() {

  const { livros, filtro, setLivros, deletarLivro } = useContext(LivroContext)

  const livrosFiltrados = livros.filter(livro => livro.titulo.toLowerCase().includes((filtro || '').toLowerCase()))



  return (
    <BrowserRouter>
      <Router livrosFiltrados={livrosFiltrados} />
    </BrowserRouter>
  )
}

export default App
