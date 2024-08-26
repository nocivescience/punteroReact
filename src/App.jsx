import { useState } from 'react'

import './App.css'
import Contenedor from './componentes/Contenedor'
import Navbar from '../src/componentes/Navbar'
import Canvas from '../src/componentes/Canvas'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter basename='/punteroReact'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Contenedor />} />
                <Route path="/canvas" element={<Canvas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App