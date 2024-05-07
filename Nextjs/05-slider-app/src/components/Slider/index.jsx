'use client'

import { useState, useEffect } from "react";
import Card from "../Card";
import Circle from "./parts";

const MySlider = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Cambiar el índice activo al siguiente
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 6000);

        // Limpia el intervalo cuando el componente se desmonta o actualiza
        return () => clearInterval(intervalId);
    }, [data.length]); // Dependencia para actualizar el intervalo cuando cambia la longitud de los datos

    return (
        <div className="hero">
            <div className="slider">
                {data.map((item, index) => (
                    <div key={item.id} className={`slide ${index === activeIndex ? 'active' : ''}`}>
                        <Card
                            img_url={item.img_url}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MySlider


