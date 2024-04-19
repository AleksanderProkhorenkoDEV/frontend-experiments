import style from '@/assets/css/Home.module.css';

const Home = () => {
    return (
        <section className={style.section}>
            <h1>Welcome: This is Mini Blog</h1>
            <p>
                This application is a mini blog of authors and their notes.

                It is intended to learn Nextjs as front and connect it to laravel as Api, 
                little by little improvements will be made and new things will be implemented.
            </p>
            <blockquote>
                Front: "v1"
                Back: "v1"
            </blockquote>
        </section>
    )
}

export default Home;