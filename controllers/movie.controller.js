import Movie from '../models/movie.model';

function getMovieList(req, res) {
    Movie.find({}, function(err, movies) {
        if(err) {
            console.log('ERR');
        } else if(movies.length > 0) {
            res.status(200);
            res.json(movies);
        } else {
            const message = {
                message: 'No movie is found'
            }
            res.json(message);
        }
    }).limit(20);
}

export default {
    getMovieList
}