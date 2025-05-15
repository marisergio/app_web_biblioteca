import { Routes, Route } from 'react-router-dom'
import { Leitor } from './pages/Leitor'
import { Main } from './componentes/Main'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router({ livrosFiltrados }) {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Main livrosFiltrados={livrosFiltrados} />} />
                <Route path="/leitor" element={<Leitor />} />
            </Route>
        </Routes>

    )
}