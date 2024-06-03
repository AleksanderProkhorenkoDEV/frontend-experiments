'use server'

export const getMovies = async () => {
    const resposne = await fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token'
        },
    })
    const data = await resposne.json()
    return data
}
