'use server'

export const getData = async ( ) => {
    const data = await fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET',
        'Content-Type': 'application/json',
    })

    const response = await data.json()

    return response.results
}