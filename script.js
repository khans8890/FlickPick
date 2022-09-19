// const { start } = require("repl");
// const { clearLine } = require("readline");
// const { start } = require("repl");

// DOM Elements
const startButton = document.getElementById('s-button');
const introContain = document.getElementById('intro-container');
const q1Contain = document.getElementById('q-1-container');
const q2Contain = document.getElementById('q-2-container');
const q3Contain = document.getElementById('q-3-container');
const q4Contain = document.getElementById('q-4-container');
const q5Contain = document.getElementById('q-5-container');
const cells = document.querySelectorAll('.cell');
const cellsTwo = document.querySelectorAll('.cell-q2');
const cellsThree = document.querySelectorAll('.cell-q3');
const cellsFour = document.querySelectorAll('.cell-q4');
const cellsFive = document.querySelectorAll('.cell-q5');
const nextOne = document.getElementById('next-1');
const nextTwo = document.getElementById('next-2');
const nextThree = document.getElementById('next-3');
const nextFour = document.getElementById('next-4');
const nextFive = document.getElementById('next-5');
let answChoices1 = document.querySelectorAll('input[name="choice-1"]');
let answChoices2 = document.querySelectorAll('input[name="choice-2"]');
let answChoices3 = document.querySelectorAll('input[name="choice-3"]');
let answChoices4 = document.querySelectorAll('input[name="choice-4"]');
let answChoices5 = document.querySelectorAll('input[name="choice-5"]');


window.addEventListener('DOMContentLoaded', () => {
  q1Contain.style.display = "none";
  q2Contain.style.display = "none";
  q3Contain.style.display = "none";
  q4Contain.style.display = "none";
  q5Contain.style.display = "none";
})

// Variables
let romanceCount = 0;
let comedyCount = 0;
let horrorCount = 0; 
let actionCount = 0;


// Event Listener to Start Quiz
  startButton.addEventListener('click', (e) => {
    e.preventDefault();
      // hide intro container 
      introContain.style.display="none";
      // display q-1-container
      q1Contain.style.display = "block";
  })

  nextOne.addEventListener('click', (e) => {
  e.preventDefault();
  q1Contain.style.display = "none";
  q2Contain.style.display = "block";
  for(const answChoice1 of answChoices1){
    if(answChoice1.checked) {
      answChoice1.id == 'romance-1'? romanceCount++: answChoice1.id == 'comedy-1'? comedyCount++: 
      answChoice1.id == 'horror-1'? horrorCount++: 
      actionCount++;
      break;
    }
  }
  })

  nextTwo.addEventListener('click', (e) => {
    e.preventDefault();
    q2Contain.style.display = "none";
    q3Contain.style.display = "block";
    for(const answChoice2 of answChoices2){
      if(answChoice2.checked) {
        answChoice2.id == 'romance-2'? romanceCount++: answChoice2.id == 'comedy-2'? comedyCount++: 
        answChoice2.id == 'horror-2'? horrorCount++: 
        actionCount++;
        break;
      }
    }
  })

  nextThree.addEventListener('click', (e) => {
    e.preventDefault();
    q3Contain.style.display = "none";
    q4Contain.style.display = "block";
    for(const answChoice3 of answChoices3){
      if(answChoice3.checked) {
        // console.log(answChoice3.id);
        answChoice3.id == 'romance-3'? romanceCount++: answChoice3.id == 'comedy-3'? comedyCount++: 
        answChoice3.id == 'horror-3'? horrorCount++: 
        actionCount++;
        break;
      }
    }
  })

  nextFour.addEventListener('click', (e) => {
    e.preventDefault();
    q4Contain.style.display = "none";
    q5Contain.style.display = "block";
    for(const answChoice4 of answChoices4){
      if(answChoice4.checked) {
        answChoice4.id == 'romance-4'? romanceCount++: answChoice4.id == 'comedy-4'? comedyCount++: 
        answChoice4.id == 'horror-4'? horrorCount++: 
        actionCount++;
        break;
      }
    }
  })

  nextFive.addEventListener('click', (e) => {
    e.preventDefault();
    // show recommendation for a movie

    // counting users pick
    for(const answChoice5 of answChoices5){
      if(answChoice5.checked) {
        answChoice5.id == 'romance-5'? romanceCount++: answChoice5.id == 'comedy-5'? comedyCount++: 
       answChoice5.id == 'horror-5'? horrorCount++: 
      actionCount++;
        console.log(romanceCount);
        console.log(comedyCount);
        console.log(horrorCount);
        console.log(actionCount);
        break;
      }
    }
    q5Contain.style.display = "none";
  })

  // nextFive.addEventListener('click', () => {
  //   let selectedGenre;
  
  //   })




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
// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://api.themoviedb.org/3/movie/550?api_key=f028604464a18dd7147f53c6c663519f", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));