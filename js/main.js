let movieData = [];
const tajetas= document.getElementById('tarjetas');
const search= document.getElementById('search');
const selector=document.getElementById('genre').value;


const arrayMovies = ["tt1918886","tt4154796","tt4154664","tt6806448", "tt0197521","tt6450804","tt1620981","tt3038708", "tt1979376","tt6565702"]
for(i=0;i<arrayMovies.length;i++){
    const url= "https://www.omdbapi.com/?i=" + arrayMovies[i] + "&apikey=9d28f170";
    fetch (url)
    .then(response => response.json())
    .then(movie => {
        movieData.push(movie)
        printMovies(movieData)
        
    })

    // .then (data => localStorage.setItem('data', JSON.stringify(movieDatas)))
    .catch(err => (err))
}

const printMovies = (movieData) => {
    const tarjetas2 = tarjetas;
    tarjetas2.innerHTML="";
    movieData.forEach(element => {
      let infMovie = `<div class="casilla">
     <h6>${element.Title.toUpperCase()}</h6>
     <img src="${element.Poster}" class="img-Poster">
     <p>Genre: ${element.Genre}</p>
     <p>Plot: ${element.Plot}</p>
     <p>Actors: ${element.Actors}</p>
     <p>Country: ${element.Country}</p></button>`;
      tarjetas2.insertAdjacentHTML("beforeend", infMovie);
      
    });
   };

   const select = () => {
    tarjetas.innerHTML = '';
    let typeGenre = select.taget.value;
    const forGenre = window.movies.filterData(selector, movieData);
    printMovies(forGenre)
    return typeGenre;
  }
  selector.addEventListener('change', select)

  search.addEventListener('keyup', () => {
    tarjetas.innerHTML = '';
    let nMovie = search.value;
    let filterTitle = window.movies.filterTitle(nMovie, movieData);
    printMovies(filterTitle)
    return nMovie;
  })
  