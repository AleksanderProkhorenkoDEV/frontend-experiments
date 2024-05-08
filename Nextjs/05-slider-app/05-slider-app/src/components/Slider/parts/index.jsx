'use client'

import style from './css/Circle.module.css'

const Circle = ({ movieId, isActive, callback, index }) => {


    const circleStyle = isActive ? `${style.circle} ${style.buttonActive}` : style.circle

    return (
        <div className={circleStyle} id={movieId} onClick={() => callback(index)}/>
    )
}

export default Circle