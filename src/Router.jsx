import { Routes, Route } from 'react-router-dom'
import { Leitor } from './pages/Leitor'
import { Main } from './pages/Main'
import { DefaultLayout } from './layouts/DefaultLayout'
import { FormLivro } from './pages/FormLivro'

export function Router({ livrosFiltrados }) {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Main livrosFiltrados={livrosFiltrados} />} />
                <Route path="/leitor" element={<Leitor />} />
                <Route path="/formLivro" element={<FormLivro />} />
                <Route path="/formLivro/:id" element={<FormLivro />} />
            </Route>
        </Routes>

    )
}