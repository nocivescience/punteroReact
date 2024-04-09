import { useRef, useEffect, useContext, useState } from "react";

const Puntero = () => {
    const [squares, setSquares] = useState([]);
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];
    const style = {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "600px",
        height: "500px",
        zIndex: 1,
        border: "1px solid red",
        borderRadius: "12px",
        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
    };

    const handleClick = (e) => {
        const newSquares = [];
        for (let i = 0; i < 13; i++) {
            const size = Math.floor(Math.random() * 10) + 10;
            const left = e.clientX + Math.floor(Math.random() * (e.clientX)) / 10 - 640;
            const top = e.clientY + Math.floor(Math.random() * (e.clientY)) / 10 - 220;
            newSquares.push({ size, left, top });
        }
        setSquares(newSquares);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSquares(prevSquares => {
                return prevSquares.map(square => ({
                    ...square,
                    left: square.left + Math.random() * 20 - 10, // Incremento aleatorio a la izquierda
                    top: square.top + Math.random() * 20 - 10,   // Incremento aleatorio hacia abajo
                }));
            });
        }, 100); // Intervalo de tiempo de 100ms para actualizar las posiciones de los cuadros

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div className="puntero" onClick={handleClick}>
            <div style={style}>
                {squares.map((square, index) => (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            width: `${square.size}px`,
                            height: `${square.size}px`,
                            left: `${square.left}px`,
                            top: `${square.top}px`,
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                            transition: "all 0.5s ease", // Transición suave
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Puntero;
