'use client'

import style from './style/Carrusel.module.css'
import { Suspense, useEffect, useState } from 'react';
import { getMovies } from "@/Lib/Request"
import Card from "@/Components/Cards";

const Carrusel = () => {

    const [length, setLenght] = useState(0)
    const [movies, setMovies] = useState([])

    const [startIdx, setStartIdx] = useState(0);
    const [endIdx, setEndIdx] = useState(5);

    const getData = async () => {
        const data = await getMovies()
        setLenght(data.results.length)
        setMovies(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const handlePrev = () => {
        if (startIdx > 0) {
            setStartIdx(startIdx - 1);
            setEndIdx(endIdx - 1);
        }
    };

    const handleNext = () => {
        if (endIdx < length) {
            setStartIdx(startIdx + 1);
            setEndIdx(endIdx + 1);
        }
    };

    return (

        <div className={style.carrusel}>
            <Suspense fallback={<p>Loading...</p>}>
                <div className={style.wrapperCarrusel}>
                    {movies.slice(startIdx, endIdx).map((item) => (
                        <Card
                            key={item.id}
                            img_url={item.poster_path}
                            title={item.title}
                        />
                    ))}
                </div>
            </Suspense>
            <button onClick={handlePrev}> left </button>
            <button onClick={handleNext}> right </button>
        </div>
    )
}

export default Carrusel