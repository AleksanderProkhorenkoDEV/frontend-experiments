'use server'

export const getMovies = async () => {
    const resposne = await fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmI5MDllNDJhNjRkMmM5OTQ5YTg0Yzk4OGQ1YzE2MCIsInN1YiI6IjY1YzYyNjExMmVmZTRlMDE2MjUyMTdkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5DDW8yqUgiF_CozoQe2WSPLHo7DJ65Q33tLRoT7943E'
        },
    })
    const data = await resposne.json()
    return data
}