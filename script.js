// DOM Elements
const startButton = document.getElementById("s-button");
const introContain = document.getElementById("intro-container");
const q1Contain = document.getElementById("q-1-container");
const q2Contain = document.getElementById("q-2-container");
const q3Contain = document.getElementById("q-3-container");
const q4Contain = document.getElementById("q-4-container");
const q5Contain = document.getElementById("q-5-container");
const q6Contain = document.getElementById("q-6-container");
const nextSix = document.getElementById("next-6");
const movieContain = document.getElementById("movie-rec-container");
const movieRec = document.querySelectorAll(".movieRec");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const cells = document.querySelectorAll(".cell");
const cellsTwo = document.querySelectorAll(".cell-q2");
const cellsThree = document.querySelectorAll(".cell-q3");
const cellsFour = document.querySelectorAll(".cell-q4");
const cellsFive = document.querySelectorAll(".cell-q5");
const nextOne = document.getElementById("next-1");
const nextTwo = document.getElementById("next-2");
const nextThree = document.getElementById("next-3");
const nextFour = document.getElementById("next-4");
const nextFive = document.getElementById("next-5");
const psychoanalysis = document.getElementById("psychoanalysis");
const randomMovieButton = document.createElement("button");
const randomMovie = document.getElementById("random-movie");
const randomTitle = document.getElementById("randomTitle");
const randomPoster = document.getElementById("randomPoster");
const randomOverview = document.getElementById("random-overview");

//GenreDivs
const romanceDiv = document.getElementById("romance-q6-container");
const comedyDiv = document.getElementById("comedy-q6-container");
const horrorDiv = document.getElementById("horror-q6-container");
const actionDiv = document.getElementById("action-q6-container");
//Working to fetch genre
const movieTitle = document.getElementById("title");
const posterImg = document.getElementById(`poster`);
const overviewSection = document.getElementById("overview");
//YT API
const videoFrame = document.querySelector("iframe");
//AnswerChoices
let answChoices1 = document.querySelectorAll('input[name="choice-1"]');
let answChoices2 = document.querySelectorAll('input[name="choice-2"]');
let answChoices3 = document.querySelectorAll('input[name="choice-3"]');
let answChoices4 = document.querySelectorAll('input[name="choice-4"]');
let answChoices5 = document.querySelectorAll('input[name="choice-5"]');
let answChoices6 = document.querySelectorAll('input[name="choice-6"]');

window.addEventListener("DOMContentLoaded", () => {
  q1Contain.style.display = "none";
  q2Contain.style.display = "none";
  q3Contain.style.display = "none";
  q4Contain.style.display = "none";
  q5Contain.style.display = "none";
  q6Contain.style.display = "none";
  nextOne.disabled = true;
  nextTwo.disabled = true;
  nextThree.disabled = true;
  nextFour.disabled = true;
  nextFive.disabled = true;
  nextSix.disabled = true;
});

document
  .getElementById("romance-1")
  .addEventListener("click", () => (nextOne.disabled = false));
document
  .getElementById("comedy-1")
  .addEventListener("click", () => (nextOne.disabled = false));
document
  .getElementById("horror-1")
  .addEventListener("click", () => (nextOne.disabled = false));
document
  .getElementById("action-1")
  .addEventListener("click", () => (nextOne.disabled = false));
document
  .getElementById("romance-2")
  .addEventListener("click", () => (nextTwo.disabled = false));
document
  .getElementById("comedy-2")
  .addEventListener("click", () => (nextTwo.disabled = false));
document
  .getElementById("horror-2")
  .addEventListener("click", () => (nextTwo.disabled = false));
document
  .getElementById("action-2")
  .addEventListener("click", () => (nextTwo.disabled = false));
document
  .getElementById("romance-3")
  .addEventListener("click", () => (nextThree.disabled = false));
document
  .getElementById("comedy-3")
  .addEventListener("click", () => (nextThree.disabled = false));
document
  .getElementById("horror-3")
  .addEventListener("click", () => (nextThree.disabled = false));
document
  .getElementById("action-3")
  .addEventListener("click", () => (nextThree.disabled = false));
document
  .getElementById("romance-4")
  .addEventListener("click", () => (nextFour.disabled = false));
document
  .getElementById("comedy-4")
  .addEventListener("click", () => (nextFour.disabled = false));
document
  .getElementById("horror-4")
  .addEventListener("click", () => (nextFour.disabled = false));
document
  .getElementById("action-4")
  .addEventListener("click", () => (nextFour.disabled = false));
document
  .getElementById("romance-5")
  .addEventListener("click", () => (nextFive.disabled = false));
document
  .getElementById("comedy-5")
  .addEventListener("click", () => (nextFive.disabled = false));
document
  .getElementById("horror-5")
  .addEventListener("click", () => (nextFive.disabled = false));
document
  .getElementById("action-5")
  .addEventListener("click", () => (nextFive.disabled = false));
document
  .getElementById("romance-6")
  .addEventListener("click", () => (nextSix.disabled = false));
document
  .getElementById("comedy-6")
  .addEventListener("click", () => (nextSix.disabled = false));
document
  .getElementById("horror-6")
  .addEventListener("click", () => (nextSix.disabled = false));
document
  .getElementById("action-6")
  .addEventListener("click", () => (nextSix.disabled = false));


// Variables
let romanceCount = 0;
let comedyCount = 0;
let horrorCount = 0;
let actionCount = 0;
let countArr = [];
let genreId = 0;
let genreCount = 0;



// Event Listener to Start Quiz
startButton.addEventListener("click", (e) => {
  e.preventDefault();
  // hide intro container
  introContain.style.display = "none";
  // display q-1-container
  q1Contain.style.display = "block";
});

nextOne.addEventListener("click", (e) => {
  e.preventDefault();
  q1Contain.style.display = "none";
  q2Contain.style.display = "block";
  for (const answChoice1 of answChoices1) {
    if (answChoice1.checked) {
      answChoice1.id == "romance-1"
        ? romanceCount++
        : answChoice1.id == "comedy-1"
        ? comedyCount++
        : answChoice1.id == "horror-1"
        ? horrorCount++
        : actionCount++;
      break;
    }
  }
  romanceCount === genreCount
    ? (genreId = 10749)
    : comedyCount == genreCount
    ? (genreId = 35)
    : horrorCount == genreCount
    ? (genreId = 27)
    : (genreId = 28);
});

nextTwo.addEventListener("click", (e) => {
  e.preventDefault();
  q2Contain.style.display = "none";
  q3Contain.style.display = "block";
  for (const answChoice2 of answChoices2) {
    if (answChoice2.checked) {
      answChoice2.id == "romance-2"
        ? romanceCount++
        : answChoice2.id == "comedy-2"
        ? comedyCount++
        : answChoice2.id == "horror-2"
        ? horrorCount++
        : actionCount++;
      break;
    }
  }
});

nextThree.addEventListener("click", (e) => {
  e.preventDefault();
  q3Contain.style.display = "none";
  q4Contain.style.display = "block";
  for (const answChoice3 of answChoices3) {
    if (answChoice3.checked) {
      answChoice3.id == "romance-3"
        ? romanceCount++
        : answChoice3.id == "comedy-3"
        ? comedyCount++
        : answChoice3.id == "horror-3"
        ? horrorCount++
        : actionCount++;
      break;
    }
  }
});

nextFour.addEventListener("click", (e) => {
  e.preventDefault();
  q4Contain.style.display = "none";
  q5Contain.style.display = "block";
  for (const answChoice4 of answChoices4) {
    if (answChoice4.checked) {
      answChoice4.id == "romance-4"
        ? romanceCount++
        : answChoice4.id == "comedy-4"
        ? comedyCount++
        : answChoice4.id == "horror-4"
        ? horrorCount++
        : actionCount++;
      break;
    }
  }
});

nextFive.addEventListener("click", (e) => {
  e.preventDefault();
  // show recommendation for a movie

  // counting users pick
  for (const answChoice5 of answChoices5) {
    if (answChoice5.checked) {
      answChoice5.id == "romance-5"
        ? romanceCount++
        : answChoice5.id == "comedy-5"
        ? comedyCount++
        : answChoice5.id == "horror-5"
        ? horrorCount++
        : actionCount++;
      break;
    }
  }
  countArr.push(romanceCount, comedyCount, horrorCount, actionCount);
  countArr = countArr.filter(
    (num) =>
      num === Math.max(romanceCount, comedyCount, horrorCount, actionCount)
  );
  let genreCount = Math.max(...countArr);
  console.log(countArr);
  if (countArr.length === 1) {
    q5Contain.style.display = "none";
      romanceCount === genreCount
        ? (genreId = 10749)
        : comedyCount == genreCount
        ? (genreId = 35)
        : horrorCount == genreCount
        ? (genreId = 27)
        : (genreId = 28)
    ;
    fetchMovie(genreId);
    analysis(genreId);
  } else {
    q5Contain.style.display = "none";
    q6Contain.style.display = "block";
  }
  checkTies(genreCount);
});


nextSix.addEventListener("click", (e) => {
  e.preventDefault();
  for (const answChoice6 of answChoices6) {
    if (answChoice6.checked) {
      answChoice6.id == "romance-6"
        ? romanceCount++
        : answChoice6.id == "comedy-6"
        ? comedyCount++
        : answChoice6.id == "horror-6"
        ? horrorCount++
        : actionCount++;
      console.log("Romance is", romanceCount);
      console.log("Comedy is", comedyCount);
      console.log("Horror is", horrorCount);
      console.log("Action is", actionCount);
      break;
    }
  }
  genreCount = Math.max(romanceCount, comedyCount, horrorCount, actionCount);

  console.log(
    romanceCount === genreCount
      ? (genreId = 10749)
      : comedyCount == genreCount
      ? (genreId = 35)
      : horrorCount == genreCount
      ? (genreId = 27)
      : (genreId = 28)
  );
  q6Contain.style.display = "none";
  fetchMovie(genreId);
  analysis(genreId);
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bd09244eacmsh340c339682f4ebep1effb4jsn564e406f99fc",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

//Giving Users a random movie of the same genre logic
async function getRandomMovie(genreId) {
  for (let page = 1; page <= 5; page++) {
    randomMovieButton.addEventListener("click", async (e) => {
      videoFrame.src = "";
      for (let i = 0; i < movieRec.length; i++) {
        movieRec[i].style.display = "none";
      }
      let movieApi = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}&page=${page}`,
        requestOptions
      );
      let movieApiJson = await movieApi.json();
      let dataInfo = await movieApiJson;
      let randomMovie;
      let randomAmount = Math.floor(Math.random() * dataInfo.results.length);
      //Display the random movies only > 7 and more than 500 votes
      for (let i = 0; i < randomAmount + 1; i++) {
        if (
          dataInfo.results[i].vote_average > 7.0 &&
          dataInfo.results[i].vote_count > 500
        ) {
          randomMovie = dataInfo.results[i];
        }
      }
      // console.log(randomMovie);
      let randomPost = randomMovie.poster_path;
      randomTitle.innerText = `${randomMovie.title} \n \n Rating: ${randomMovie.vote_average} /10 \n \n Voted: ${randomMovie.vote_count} \n \n ${randomMovie.overview}`;
      randomPoster.src = `https://image.tmdb.org/t/p/original${randomPost}`;
      randomPoster.style.width = "400px";
      randomPoster.style.height = "600px";
      randomTitle.style.cssText = `
      color: white;
      width:200px;
      height:200px;
      padding:30px;`;
    });
    randomMovie.style.cssText = `
          display:flex;
          font-size: 16px;
          justify-content: left;  
          text-align: left;
          padding: 20px;  
          `;
  }
}

//fetching movie top genre to display for User logic
async function fetchMovie(genreId) {
  getRandomMovie(genreId);
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}&page=1`,
    requestOptions
  );
  let rate = 0;
  let movieData;
  let json = await response.json();
  let data = await json;
  console.log(data);
  for (let i = 0; i < data.results.length; i++) {
    if (
      data.results[i].vote_average > rate &&
      data.results[i].vote_count > 500
    ) {
      rate = data.results[i].vote_average;
      movieData = data.results[i];
    }
  }
  let posterPath = movieData.poster_path;
  console.log(posterImg);
  posterImg.src = `https://image.tmdb.org/t/p/original${posterPath}`;
  movieTitle.innerText = `${movieData.title} \n \n Rating: ${movieData.vote_average} /10 \n \n Voted: ${movieData.vote_count} \n \n ${movieData.overview}`;
  movieTitle.style.cssText = `
      color:white;
      width:200px;
      height:200px;
      padding:30px;`;
  poster.style.width = "400px";
  poster.style.height = "600px";
  movieContain.style.cssText = `
          display:flex;
          font-size: 16px;
          justify-content: left;
          text-align: left;
          padding: 20px;  
          `;
  movieContain.append(randomMovieButton);
  let videoYt = await fetch(
    `https://youtube138.p.rapidapi.com/search/?q=${movieData.title}movie&trailer`,
    options
  );
  let videoJson = await videoYt.json();
  let videoData = await videoJson;
  let videoLink = await videoData.contents[0].video.videoId;
  videoFrame.src = `https://www.youtube.com/embed/${videoLink}`;
  videoFrame.style.cssText = `height:600px;
  width:800px;
  border: 3px solid black;
  `;
  randomMovieButton.innerText = "New Flick";
  randomMovieButton.style.cssText = `font-size: 12px; 
          background-color: white;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
          width: 150px;
          height: 50px;
          color: black;
          transition: all 0.5s ease 0s;
        `;
}

//psychoanalysis text 
function analysis(genreId) {
  modal.style.display = "block";
  if (genreId == 10479) {
    psychoanalysis.innerText =
      "You're a romantic at heart, chasing love where you see it and if you don't see it you create it. We have the just film for your romantic tendencies.";
  } else if (genreId == 35) {
    psychoanalysis.innerText =
      "A comic in every room you're in, you make the ones around you laugh, sparking joy everywhere you go. At times, you are a bit immature but no one takes it to heart when the jokes are good, we have the film guaranteed to make you laugh.";
  } else if (genreId == 27) {
    psychoanalysis.innerText =
      "You're a thrill seeker and enjoy living life on the edge. We have just the film to keep you on the edge of your seat.";
  } else {
    psychoanalysis.innerText =
      "A hero at heart, you often daydream about saving everyone around you. Live vicariously through this film and be the hero you always want to be.";
  }
}

//For Modal PopUp
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

//TieBreak logic
function checkTies(genreCount) {
  romanceCount === genreCount && comedyCount === genreCount
    ? hide(horrorDiv, actionDiv)
    : 
    romanceCount === genreCount && horrorCount === genreCount
    ? hide(comedyDiv, actionDiv)
    :
    romanceCount === genreCount && actionCount === genreCount
    ? hide(comedyDiv, horrorDiv)
    :
    comedyCount === genreCount && horrorCount === genreCount
    ? hide(romanceDiv, actionDiv)
    :
    comedyCount === genreCount && actionCount === genreCount
    ? hide(romanceDiv, horrorDiv)
    :
      // (horrorCount === genreCount && actionCount === genreCount) ?
      hide(romanceDiv, comedyDiv);
}

function hide(id1, id2) {
  id1.style.display = "none";
  id2.style.display = "none";
}