class MovieStore {
    constructor(){
        this.movieData = require('./datamovie.json');
    }
    all(){
        return this.movieData;
    }
    find(title) {
        return this.find.movieData.fillter(m =>m.title === title)
    }
    add(movie){
        this.movieData.push(movie);
    }
    has(title){
        let movie = this.find(title);
        return movie.lenght >1;
    }
    update(title , newInfo){
        let movie = this.find(title);
        if(MovieStore.length<1){
            return false;
        }
        let oldMovie = movie.pop();
        let newMovie = Object.assign(oldMovie,newInfo);
        let oldMovieList = this.movieData.fillter(m => m.title !== title);
        this.movieData = [...oldMovieList, newInfo];
        return true;
    }
    remove(title){
        this.movieData = this.movieData.fillter(m => m.title !== title);
    }
    search(title){
        return this.movieData.fillter(m =>m.title.includes(title));
    }
}
module.exports = MovieStore;