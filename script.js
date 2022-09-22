// const { start } = require("repl");
// const { clearLine } = require("readline");
// const { start } = require("repl");

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

const randomMovieButton = document.createElement("button");
const randomMovie = document.getElementById("random-movie");
const randomTitle = document.getElementById("randomTitle");
const randomPoster = document.getElementById("randomPoster");
const randomOverview = document.getElementById("random-overview");

let answChoices1 = document.querySelectorAll('input[name="choice-1"]');
let answChoices2 = document.querySelectorAll('input[name="choice-2"]');
let answChoices3 = document.querySelectorAll('input[name="choice-3"]');
let answChoices4 = document.querySelectorAll('input[name="choice-4"]');
let answChoices5 = document.querySelectorAll('input[name="choice-5"]');
let answChoices6 = document.querySelectorAll('input[name="choice-6"]');
const releaseYr = document.getElementById('release-date');
const runTime = document.getElementById("length");

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

// Variables
let romanceCount = 0;
let comedyCount = 0;
let horrorCount = 0;
let actionCount = 0;
let countArr = [];
let genreId = 0;

//GenreDivs
const romanceDiv = document.getElementById("romance-q6-container");
<<<<<<< HEAD
const comedyDiv =  document.getElementById("comedy-q6-container");
const horrorDiv =  document.getElementById("horror-q6-container");
const actionDiv =  document.getElementById("action-q6-container");
=======
const comedyDiv = document.getElementById("comedy-q6-container");
const horrorDiv = document.getElementById("horror-q6-container");
const actionDiv = document.getElementById("action-q6-container");
>>>>>>> 051f6e7509a3bac3129cd9684f98c67af4394028

//Working to fetch genre
const movieTitle = document.getElementById("title");
const posterImg = document.getElementById(`poster`);
const overviewSection = document.getElementById("overview");
//YT API
const videoFrame = document.querySelector("iframe");

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
    countArr.push(romanceCount,comedyCount,horrorCount,actionCount);
    countArr = countArr.filter(num => num === Math.max(romanceCount,comedyCount,horrorCount,actionCount));
    let genreCount = Math.max(...countArr);
    console.log(countArr);
    if(countArr.length === 1){
      q5Contain.style.display = "none";
      console.log(romanceCount === genreCount ? genreId = 14 : comedyCount === genreCount ? genreId = 4 : horrorCount === genreCount ? genreId = 11 : genreId = 1)
      fetchMovie(genreId);
    } else{
      console.log("Break this Tie")
      q5Contain.style.display = "none";
      q6Contain.style.display = "block";
    }
    //Romance and Comedy Tie 
    if(romanceCount === genreCount && comedyCount === genreCount){
      hide(horrorDiv, actionDiv);
      //hide opposite
    }
    //Romance and Horror Tie 
    if(romanceCount === genreCount && horrorCount === genreCount){
      hide(comedyDiv, actionDiv);
    }
    //Romance and Action Tie 
    if(romanceCount === genreCount && actionCount === genreCount){
      hide(comedyDiv, horrorDiv);
    }
    //Comedy and Horror Tie 
    if(comedyCount === genreCount && horrorCount === genreCount){
      hide(romanceDiv, actionDiv);
    }
    //Comedy and Action Tie 
    if(comedyCount === genreCount && actionCount === genreCount){
      hide(romanceDiv,horrorDiv);
    }
    //Horror and Action Tie 
    if(horrorCount === genreCount && actionCount === genreCount)
      hide(romanceDiv,comedyDiv);
      // console.log("Horror","Action")​
  })

  function hide(id1,id2) {
    (id1).style.display = "none";
    (id2).style.display = "none";
    }

nextThree.addEventListener("click", (e) => {
  e.preventDefault();
  q3Contain.style.display = "none";
  q4Contain.style.display = "block";
  for (const answChoice3 of answChoices3) {
    if (answChoice3.checked) {
      // console.log(answChoice3.id);
      answChoice3.id == "romance-3"
        ? romanceCount++
        : answChoice3.id == "comedy-3"
        ? comedyCount++
        : answChoice3.id == "horror-3"
        ? horrorCount++
        : actionCount++;
      break;
    }
    let genreCount = Math.max(romanceCount,comedyCount,horrorCount,actionCount)
    //genre ID
    console.log(romanceCount === genreCount ? genreId = 14 : comedyCount === genreCount ? genreId = 4 : horrorCount === genreCount ? genreId = 11 : genreId = 1 )
    q6Contain.style.display = "none";
    fetchMovie(genreId);
  }
})

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

  const requestOptions = { 
    method: 'GET',
    redirect: 'follow'
  };
  function fetchMovie(genreId) {
    // for (let page = 1; page < 10; page++) {
      //Fetches list of movies to a genre
      fetch(`https://api.watchmode.com/v1/list-titles/?apiKey=Srktrqdif9k4CAPXk1MtGyy6xGGuXCFIohSVKMgK&genres=${genreId}&type=movie&limit=30`, requestOptions)
        .then(response => response.json())
        .then(data =>
        // isolates the list by most popular & grabs one
        {
          for(let i = 0; i < data.titles.length; i++){
          let movieInfo = data.titles[i];        
           console.log(movieInfo);
           fetch(`https://api.watchmode.com/v1/title/${movieInfo.id}/details/?apiKey=Srktrqdif9k4CAPXk1MtGyy6xGGuXCFIohSVKMgK`)
           .then(response => response.json())
           .then(movie => {
            console.log(movie);
            releaseYr.innerText = `Release Date: ${movie.release_date}`;
             let posterPath = movie.poster;
            // console.log(posterPath);
             posterImg.src = posterPath;
             posterImg.style.width = "400px";
             posterImg.style.height = "500px";
             movieTitle.innerText = movie.title;
             runTime.innerText = `Length: ${movie.runtime_minutes} min`
             randomOverview.innerText = movie.plot_overview;
            
             // where to stream 
             fetch(`https://api.watchmode.com/v1/title/${movieInfo.id}/sources?apiKey=Srktrqdif9k4CAPXk1MtGyy6xGGuXCFIohSVKMgK`)
             .then(response => response.json())
             .then(movie => console.log(movie));
           //  let videoLink = data.contents[0].video.videoId;
             videoFrame.src = 'https://www.youtube-nocookie.com/embed/v=VDLRokc5c-Y';
          })
          break;
        }
     
    
      movieContain.append(randomMovieButton);
      randomMovieButton.innerText = "New Pick"
      // randomMovie Display Section
      randomMovieButton.addEventListener('click', () => {
      for (let i = 1; i < data.titles.length; i++) {
        console.log(data.titles[i]);
        movieContain.style.display = "none";
        fetchMovie(genreId);
      }

    })



    })
  }
    

  
          
          
  //         fetch(`https://youtube138.p.rapidapi.com/search/?q=${movieData.title}movie&trailer`, options).then(response => response.json()).then(data => {
  //           console.log(data);
  //           console.log(data.contents);
  
  //         })
  //         
  //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}&page=${page}`, requestOptions)
  //             .then(response => response.json())
  //             .then(data => {
  //               data.results;
  //               console.log(data.results)
  //               let randomMovie;
  //               let randomAmount = Math.floor(Math.random() * data.results.length)
  //               console.log(randomAmount)
  //               //Display the randomm movies only > 7
  //               for (let i = 0; i < randomAmount + 1; i++) {
  //                 if (data.results[i].vote_average > 7.0) {
  //                   randomMovie = data.results[i]
  //                 }
  //               }
  //               console.log(randomMovie)
  //               let randomPost = randomMovie.poster_path
  //               randomTitle.innerText = `${randomMovie.title} \n Rating: ${randomMovie.vote_average}/10 \n Voted: ${randomMovie.vote_count}`
  //               randomPoster.src = `https://image.tmdb.org/t/p/original${randomPost}`
  //               randomPoster.style.width = "400px"
  //               randomPoster.style.height = "500px"
  //               randomOverview.innerText = randomMovie.overview
  //             })
  //         })
  //       })
  //   }
  // }

  // function fetchMovie(genreId){
  //   fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}`, requestOptions)
  //   .then(response => response.json())
  //   .then(data => 
  //   //This to fetch the highest rating and output as the 1st appearence
  //   {data.results;
  //     let rate = 0;
  //     let movieData;  
  //     for (let i = 0; i < data.results.length;i++){
  //       if (data.results[i].vote_average > rate){
  //         rate = data.results[i].vote_average;
  //         // rate = Math.max(rate, data.results[i].vote_average);
  //         movieData = data.results[i]
  //         fetchAvail(movieData)
  //       }
  //     }
  //     console.log(data);
  //     console.log(rate);
  //     console.log(movieData);
  //     let posterPath = movieData.poster_path
  //     console.log(posterImg)
  //     movieTitle.innerText = `${movieData.title} \n Rating: ${rate}`
  //     posterImg.src = `https://image.tmdb.org/t/p/original${posterPath}`
  //     poster.style.width = "400px"
  //     poster.style.height = "500px" 
  //     overviewSection.innerText = movieData.overview
  // })}



  // const fetch = require('node-fetch');

// let url = 'https://api.watchmode.com/v1/title/345534/sources/?apiKey=YOUR_API_KEY';

// fetch(url, { method: 'Get' })
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);
//     }); 

  
  
  
  
  
  
  
  
  
// =======
// nextFive.addEventListener("click", (e) => {
//   e.preventDefault();
//   // show recommendation for a movie

//   // counting users pick
//   for (const answChoice5 of answChoices5) {
//     if (answChoice5.checked) {
//       answChoice5.id == "romance-5"
//         ? romanceCount++
//         : answChoice5.id == "comedy-5"
//         ? comedyCount++
//         : answChoice5.id == "horror-5"
//         ? horrorCount++
//         : actionCount++;
//       console.log(romanceCount);
//       console.log(comedyCount);
//       console.log(horrorCount);
//       console.log(actionCount);
//       break;
//     }
//   }
//   countArr.push(romanceCount, comedyCount, horrorCount, actionCount);
//   countArr = countArr.filter(
//     (num) =>
//       num === Math.max(romanceCount, comedyCount, horrorCount, actionCount)
//   );
//   let genreCount = Math.max(...countArr);
//   console.log(countArr);
//   if (countArr.length === 1) {
//     q5Contain.style.display = "none";
//     console.log(
//       romanceCount === genreCount
//         ? (genreId = 10749)
//         : comedyCount == genreCount
//         ? (genreId = 35)
//         : horrorCount == genreCount
//         ? (genreId = 27)
//         : (genreId = 28)
//     );
//     fetchMovie(genreId);
//   } else {
//     console.log("Break this Tie");
//     q5Contain.style.display = "none";
//     q6Contain.style.display = "block";
//   }
//   //Romance and Comedy Tie
//   if (romanceCount === genreCount && comedyCount === genreCount) {
//     hide(horrorDiv, actionDiv);
//     //hide opposite
//   }
//   //Romance and Horror Tie
//   if (romanceCount === genreCount && horrorCount === genreCount) {
//     hide(comedyDiv, actionDiv);
//   }
//   //Romance and Action Tie
//   if (romanceCount === genreCount && actionCount === genreCount) {
//     hide(comedyDiv, horrorDiv);
//   }
//   //Comedy and Horror Tie
//   if (comedyCount === genreCount && horrorCount === genreCount) {
//     hide(romanceDiv, actionDiv);
//   }
//   //Comedy and Action Tie
//   if (comedyCount === genreCount && actionCount === genreCount) {
//     hide(romanceDiv, horrorDiv);
//   }
//   //Horror and Action Tie
//   if (horrorCount === genreCount && actionCount === genreCount)
//     hide(romanceDiv, comedyDiv);
//   // console.log("Horror","Action")​
// });

// function hide(id1, id2) {
//   id1.style.display = "none";
//   id2.style.display = "none";
// }

// nextSix.addEventListener("click", (e) => {
//   e.preventDefault();
//   for (const answChoice6 of answChoices6) {
//     if (answChoice6.checked) {
//       answChoice6.id == "romance-6"
//         ? romanceCount++
//         : answChoice6.id == "comedy-6"
//         ? comedyCount++
//         : answChoice6.id == "horror-6"
//         ? horrorCount++
//         : actionCount++;
//       console.log("Romance is", romanceCount);
//       console.log("Comedy is", comedyCount);
//       console.log("Horror is", horrorCount);
//       console.log("Action is", actionCount);
//       break;
//     }
//   }
//   let genreCount = Math.max(
//     romanceCount,
//     comedyCount,
//     horrorCount,
//     actionCount
//   );
//   console.log(
//     romanceCount === genreCount
//       ? (genreId = 10749)
//       : comedyCount == genreCount
//       ? (genreId = 35)
//       : horrorCount == genreCount
//       ? (genreId = 27)
//       : (genreId = 28)
//   );
//   q6Contain.style.display = "none";
//   fetchMovie(genreId);
// });

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "483126c32amsh524fdc002e0512ep1528c2jsn17c3de5b89b1",
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

// const requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// async function getRandomMovie(genreId) {
//   for (let page = 1; page <= 5; page++) {
//     randomMovieButton.addEventListener("click", async (e) => {
//       videoFrame.src = "";
//       for (let i = 0; i < movieRec.length; i++) {
//         movieRec[i].style.display = "none";
//       }
//       await fetch(
//         `https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}&page=${page}`,
//         requestOptions
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           data.results;
//           console.log(data.results);
//           let randomMovie;
//           let randomAmount = Math.floor(Math.random() * data.results.length);
//           console.log(randomAmount);
//           //Display the randomm movies only > 7
//           for (let i = 0; i < randomAmount + 1; i++) {
//             if (data.results[i].vote_average > 7.0 && data.results[i].vote_count > 500){
//               randomMovie = data.results[i];
//             }
//           }
//           console.log(randomMovie);
//           let randomPost = randomMovie.poster_path;
//           randomTitle.innerText = `${randomMovie.title} \n \n Rating: ${randomMovie.vote_average}/10 \n \n Voted: ${randomMovie.vote_count}`;
//           randomPoster.src = `https://image.tmdb.org/t/p/original${randomPost}`;
//           randomPoster.style.width = "400px";
//           randomPoster.style.height = "500px";
//           randomOverview.innerText = randomMovie.overview;
//         });
//         randomMovie.style.cssText = 
//         `display:flex;
//         font-size: 35px;
//         justify-content: center;
//         text-align: center;
//         font-family: cursive;
//         `
//     });
//   }
// }

// async function fetchMovie(genreId) {
//   getRandomMovie(genreId);
//   //Fetching the top rated movie of page 1
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=f028604464a18dd7147f53c6c663519f&with_genres=${genreId}&page=1`,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((data) =>
//       //This to fetch the highest rating and output as the 1st appearence
//       {
//         data.results;
//         let rate = 0;
//         let movieData;
//         for (let i = 0; i < data.results.length; i++) {
//           if (data.results[i].vote_average > rate && data.results[i].vote_count > 500) {
//             rate = data.results[i].vote_average;
//             movieData = data.results[i];
//           }
//         }
//         //Display Top Rate Movie
//         console.log(movieData);
//         let posterPath = movieData.poster_path;
//         console.log(posterImg);
//         movieTitle.innerText = `${movieData.title} \n \n Rating: ${movieData.vote_average}/10 \n \n Voted: ${movieData.vote_count}`;
//         posterImg.src = `https://image.tmdb.org/t/p/original${posterPath}`;
//         poster.style.width = "400px";
//         poster.style.height = "500px";
//         overviewSection.innerText = movieData.overview;
//         movieContain.append(randomMovieButton);
//         fetch(
//           `https://youtube138.p.rapidapi.com/search/?q=${movieData.title}movie&trailer`,
//           options
//         )
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//             console.log(data.contents);
//             let videoLink = data.contents[0].video.videoId;
//             console.log(videoLink);
//             videoFrame.src = `https://www.youtube.com/embed/${videoLink}`;
//           });
//           movieContain.style.cssText = 
//           `display:flex;
//           font-size: 35px;
//           justify-content: center;
//           text-align: center;
//           font-family: cursive;
//           `
//         randomMovieButton.innerText =
//           "Please Click to see a Random Movie of the same genre";
//       }
//     );
// }
