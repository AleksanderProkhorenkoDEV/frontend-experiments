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
                img_url: "https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg"
            },
            {
                id: 3,
                title: "Movie 2",
                description: "Description of Movie 3",
                img_url: "https://image.tmdb.org/t/p/original/uLhWh1pggjIiQ1DpL0DvaIgERQR.jpg"
            },
            {
                id: 4,
                title: "Movie 2",
                description: "Description of Movie 5",
                img_url: "https://image.tmdb.org/t/p/original/wMPb9uQjeE6CJ2fJQlYzyhvA1HN.jpg"
            },
        ],

    };

    return (
        <MySlider
            data={fetchData.movies} />
    )
}

export default Page