window.movies={
    filterData: (typeGenre, movieData)=> {
        let filterByGenre = movieData.filter(element => element.Genre.includes(typeGenre));
        return filterByGenre; 
        },
        
    filterTitle: (nMovie, movieData)=> {    
        let peliculaEncontrada = movieData.filter(movieData => (movieData.name.toUpperCase().match(nMovie.toUpperCase()))); 
        console.log(peliculaEncontrada)
        }, 
    }