import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home';
import Contatos from '../Pages/Contato';
import Produtos from '../Pages/Produtos';

const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
            <Route
                path="/produtos"
                element={<Produtos />}
            />
        </Routes>
    )
}

export default MainRoutes;
