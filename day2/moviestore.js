class MovieStore {
    constructor(){
        this.movieData = require('./datamovie.json');
    }
    all(){
        return this.movieData;
    }
}
module.exports = MovieStore;