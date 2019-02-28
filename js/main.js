// Aquí van las variables declaradas//
//Aquí va la interacción del DOM//
let movieData = [];

const arrayMovies = ["tt1918886","tt4154796","tt3959390","tt6806448", "tt0197521","tt6450804","tt1620981","tt3038708", "tt1979376"]
for(i=0;i<arrayMovies.length;i++){
    const url= "http://www.omdbapi.com/?i=" + arrayMovies[i] + "&apikey=9d28f170";
    fetch (url)
    .then(resp =>resp)
    .then(response => response.json())
    .then(movie => {
        movieData.push(movie)
        return movieData
    })
    .then(data => moviesel(data))

    // .then (data => localStorage.setItem('data', JSON.stringify(movieData)))
    .catch(err => (err))
}


const moviesel = (movieData) =>{
    // movieData = JSON.parse(localStorage.getItem('data'))
    console.log(movieData)
}
