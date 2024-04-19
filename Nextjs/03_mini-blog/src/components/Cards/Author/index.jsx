import style from '@/components/Cards/css/Author.module.css'
import authorPic from '@/assets/images/Authors.png'
import Image from 'next/image'


const Author = ({ authorInfo }) => {
    return (
        <article className={style.article}>
            <Image
                src={authorPic}
                alt='author profile pic'
                width={150}
                height={150}
            />
            <div className={style.info}>
                <p>Name: { authorInfo?.name }</p>
                <p>Surnames: { authorInfo?.surnames }</p>
            </div>
        </article>
    )
}

export default Author