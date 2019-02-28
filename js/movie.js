window.movies={
    filterData: (typeGenre, movieData)=> {
        let filterByGenre = movieData.filter(element => element.Genre.includes(typeGenre));
        return filterByGenre; 
        },
    
    filterTitle: (nMovie, movieData)=> {    
        let peliculaEncontrada = movieData.filter(movieData => (movieData.Title.toUpperCase().match(nMovie.toUpperCase()))); 
        return peliculaEncontrada;
        },
}