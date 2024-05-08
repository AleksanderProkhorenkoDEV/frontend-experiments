import MySlider from "@/components/Slider"
import '@/assets/css/global.css'

const Page = () => {

    const fetchData = {
        movies: [
            {
                id: 1,
                title: "Movie 1",
                description: "Description of Movie 1",
                img_url: "https://image.tmdb.org/t/p/original/fypydCipcWDKDTTCoPucBsdGYXW.jpg"
            },
            {
                id: 2,
                title: "Movie 2",
                description: "Description of Movie 2",
                img_url: "https://image.tmdb.org/t/p/original/5Eip60UDiPLASyKjmHPMruggTc4.jpg"
            },
            {
                id: 3,
                title: "Movie 3",
                description: "Description of Movie 3",
                img_url: "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg"
            },
            {
                id: 4,
                title: "Movie 4",
                description: "Description of Movie 4",
                img_url: "https://image.tmdb.org/t/p/original/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg"
            },
        ],

    };

    return (
        <MySlider
            data={fetchData.movies} />
    )
}

export default Page