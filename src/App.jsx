import { useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Navbar from '../src/componentes/Navbar'

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>App</h1>
            <Contenedor />
        </div>
    )
}

export default App