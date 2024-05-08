import style from './css/Card.module.css'

const Card = ({ img_url, title, description }) => {
    return (
        <article className={style.article}>
            <img src={img_url} alt="" className={style.img} />
            <div className={style.container}>
                <p className={style.movieTitle}>{title}</p>
                <p className={style.movieDescription}>{description}</p>
                <div className={style.actions}>
                    <button>View More</button>
                </div>
            </div>
            
        </article>
    )
}

export default Card