let movieData = [];
var mainApp = {};
var app_fireBase;
let buttonLogOut = document.getElementById('logOut');
const tajetas= document.getElementById('tarjetas');
const selector= document.getElementById('genre');
const search = document.getElementById('search');
const arrayMovies = ["tt0448115","tt2274648","tt7286456","tt4154796","tt4154664","tt6806448", 
"tt3741700","tt6450804","tt1620981","tt3038708", "tt1979376","tt6565702","tt0837563",
"tt5598292","tt3387520","tt4913966","tt1946502","tt2139881","tt5884052","tt2935510","tt6139732",
"tt5113040","tt6107548","tt2283336","tt2283336","tt8663516","tt6320628","tt7131622","tt4682266","tt6095472"]
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
             </div>
           </div>
           <img class="img-fluid" src="${element.Poster}" alt="modal1">
        <p>Genre:${element.Genre}</p>
        <p>Plot: ${element.Plot}</p>
        <p>Actors: ${element.Actors}</p>
        <p>Country: ${element.Country}</p>
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
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid = user.uid;
    } else {
      uid = null;
      window.location.replace("index.html")
    }
  });
  
  function logOut(){
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
  buttonLogOut.addEventListener('click',mainApp.logOut); 