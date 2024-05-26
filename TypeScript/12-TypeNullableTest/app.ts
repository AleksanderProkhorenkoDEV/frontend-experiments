type MovieSmall = {
    title: string
}
interface Person {
    name: string
}
type Director = Person
type Actors = Person

type MoviesFull = {
    title: string,
    director?: Director
    actors?: Actors[]

}

const moviesSmall: MovieSmall[] = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' },
    { title: 'Movie 5' },
];

const moviesFull: MoviesFull[] = [
    {
        title: 'Movie 1',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 2',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 3',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }, { name: 'Actor two' }],
    },
    {
        title: 'Movie 4',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }],
    },
    {
        title: 'Movie 5',
        director: { name: 'Ridley Scott' },
        actors: [{ name: 'Actor one' }],
    },
];


function getDirector(movie: MoviesFull): string | null {
    return movie?.director?.name ?? 'default'
}


function getActors(movie: MoviesFull): Actors[] | string {
    return movie?.actors ?? 'default';
}

function getLeadingActor(movie: MoviesFull): Actors[] | string {
    return movie?.actors[0]?.name ?? 'No name'
}


function getSecondaryActor(movie: MoviesFull): Actors[] | string {
    return movie?.actors[1]?.name ?? 'No name'
}


function logMovie(movie: MoviesFull): void {
    console.log('Director:', getDirector(movie));
    console.log('Actors:', getActors(movie));
    console.log('Lead actor', getLeadingActor(movie));
    console.log('Second actor', getSecondaryActor(movie));
}


function logSmallMovies(movie: MoviesFull): void {
    logMovie(movie);
}


function logFullMovies(movie: MoviesFull): void {
    logMovie(movie);
}

moviesSmall.forEach((movie: MoviesFull): void => {
    console.group('Small movies');
    logSmallMovies(movie);
    console.groupEnd();
});

moviesFull.forEach((movie: MoviesFull): void => {
    console.group('Full movies');
    logFullMovies(movie);
    console.groupEnd();
});