window.movies={
    filterData: (typeGenre, movieData)=> {
        let filterByGenre = movieData.filter(element => element.genre.includes(typeGenre));
        return filterByGenre; 
        },
    //filterName: (nPokemon, movieData)=> {
    //let pokemonEncontrado = movieData.filter(movieData => (movieData.name.toUpperCase().match(nPokemon.toUpperCase()))); 
    //return (pokemonEncontrado)
    //}, 
}