import { useState, useRef } from "react";
import Contenido from "./Contenido";
import './Puntero'
import Puntero from "./Puntero";
const Contenedor = () => {
    const titulo = [
        { id: 1, titulo: "Titulo 1", cuerpo: "Cuerpo 1" },
        { id: 2, titulo: "Titulo 2", cuerpo: "Cuerpo 2" },
        { id: 3, titulo: "Titulo 3", cuerpo: "Cuerpo 3" },
    ];
    return (
        <div className="contenedor">
            <h1>Contenedor</h1>
            <Contenido titulo={titulo[0].titulo} cuerpo={titulo[0].cuerpo} />
            <Contenido titulo={titulo[1].titulo} cuerpo={titulo[1].cuerpo} />
            <Contenido titulo={titulo[2].titulo} cuerpo={titulo[2].cuerpo} />
            <Puntero />
        </div>
    );
};
export default Contenedor;