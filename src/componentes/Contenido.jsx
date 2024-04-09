import { useState, useEffect } from "react";
const Contenido = ({titulo, cuerpo}) => {
    return (
        <div className="contenido">
            <h1>{titulo}</h1>
            <p>{cuerpo}</p>
        </div>
    );
}; 
export default Contenido;