let movieData = [];

let buttonLogOut = document.getElementById('logOut');
const tajetas= document.getElementById('tarjetas');
const selector= document.getElementById('genre');
const search = document.getElementById('search');
const arrayMovies = ["tt0448115","tt2274648","tt7286456","tt4154796","tt4154664","tt6806448", 
"tt3741700","tt6450804","tt1620981","tt3038708"]
for(i=0;i<arrayMovies.length;i++){
    const url= "https://www.omdbapi.com/?i=" + arrayMovies[i] + "&apikey=9d28f170";
    fetch (url)
    .then(response => response.json())
    .then(movie => {
        movieData.push(movie)
        printMovies(movieData)
        
    })
    

    // .then (data => localStorage.setItem('data', JSON.stringify(movieData)))
    .catch(err => (err))
}

const printMovies = (movieData) => {
   tarjetas.innerHTML="";
    movieData.forEach(element => {
      let infMovie = `<div class="col-md-6 col-lg-4">
     <h6>${element.Title.toUpperCase()}</h6>
     <img src="${element.Poster}" class="img-Poster">
     <p>Genre: ${element.Genre}</p>
     <p>Plot: ${element.Plot}</p>
     <p>Actors: ${element.Actors}</p>
     <p>Director: ${element.Director}</p>
     <p>Country: ${element.Country}</p></button>`;
      tarjetas.insertAdjacentHTML("beforeend", infMovie);
      
    });
   };
  selector.addEventListener('change',()=> {
    
    let typeGenre = event.target.value;
    const forGenre = window.movies.filterData(typeGenre, movieData);
    printMovies(forGenre)
    return typeGenre;
  })
 
  search.addEventListener('keyup', ()=>{
tarjetas.innerHTML= "";
let nMovie =search.value;
let filterTitle=window.movies.filterTitle(nMovie, movieData);
printMovies(filterTitle);
return nMovie;
  })
 
 