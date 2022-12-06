"use strict";
const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};
let i = 0;
while (i < 2){
    const finishFilm = prompt("Один из последних фильмов Вы смотрели?:", ''),
      rangFilms = +prompt("На сколько баллов оцените фильм?:", '');
      i++;
    if (finishFilm != null && rangFilms != null && finishFilm !='' && rangFilms != '' && finishFilm.length < 50) {
        personalMovieDB.movies [finishFilm] = rangFilms;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
      
}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB >= 30) {
    console.log("Вы кинман");
} else {
    console.log("error");
}


// console.log(personalMovieDB);
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }  
// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for ( let j = 0; j < 3; j++) {
//         console.log(j);
//     } 
// }
// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++)
//         result+="*";
//     result +='\n';
// }
// console.log(result);
// first: for (let i = 1; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//     }
//         for (let q = 0; q < 5; q++){
//             if (q === 2) break first;
//             console.log(`Third level: ${q}`);
//         } 
// }
// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//      } 
//     }
// function fourthTask() {
//     let i = 2;
//       while (i <= 16) {
//          if (i % 2 === 0){
//              i++;
//              continue;
//          } else {
//           console.log(i);
//          }
//       i++;
//      }   
//  }
//  fourthTask();
// for (let i = 1; i <= 10; i++) {
//     if (i >= 5 && i<= 10){
//         console.log(i);
//     }
    
// }
// function thirdTask() {
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//         for (let i = 1; i <= data.length; i++) {
//             result[i - 1] = data[data.length - i];
//         }
//         console.log(result);
//     return result;
    
// }
// thirdTask();
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);