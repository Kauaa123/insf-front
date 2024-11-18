import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listar from './pages/listaChamados'
import Criar from './pages/criarChamado'

export default function Nvaegacao() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Listar />} />
                <Route path='/criarChamado' element={<Criar />} />
            </Routes>
        </BrowserRouter>
    )
}