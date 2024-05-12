import style from './style/Card.module.css'

const Card = ({img_url, title} ) => {

    return(
        <div className={style.poster}>
            <img src={`https://image.tmdb.org/t/p/original${img_url}`} alt={`Poster of ${title}`} className={style.imgCarrusel}/>
            <p className={style.parrafo}>{title}</p>
        </div>
    )
}

export default Card