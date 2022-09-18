// const { get } = require("http");

// import fetch from "node-fetch";
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6acb566dc7msh6aa07c069428351p12fa2ejsn49fc3821deb2',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };
// async function getFilm(){
// let fetchLink = await fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=adventure&limit=1', options)
// let fetchObj = await fetchLink.json();
// let film = await fetchObj;
// const getTitle = `https://www.imdb.com${film}`
// console.log(getTitle)
// const thor = document.getElementById("title")
// thor.innerText = getTitle
// }

// getFilm();
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.themoviedb.org/3/movie/550?api_key=f028604464a18dd7147f53c6c663519f", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));