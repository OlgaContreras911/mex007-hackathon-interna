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
      let infMovie = `<div class="container">
      <h2 class="text-center text-uppercase text-secondary mb-0">${element.Title.toUpperCase()}</h2>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
            <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
              <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                <i class="fas fa-search-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${element.Poster}" alt="modal1">
          </a>
        </div>
      </div>
    </div>`;
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
 
 
