const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('один из послелдних просмотренных фильмов?', ''),
//       b = prompt('на сколько оцените его?', ''),
//       c = prompt('один из послелдних просмотренных фильмов?', ''),
//       d = prompt('на сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for(let i = 0; i < 2; i++){
    const a = prompt('один из послелдних просмотренных фильмов?', ''),
          b = prompt('на сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10){
    console.log('Просмотрено мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log('вы классный зритель');
}else if(personalMovieDB.count > 30){
    console.log('вы киноман');
}else{
    console.log('произошла ошибка');
}

console.log(personalMovieDB);