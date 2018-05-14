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

//lean option -> return plain javascript object
function getMovieDetail(req, res) {
    var movieId = req.param('id');
    Movie.findOne({ id: movieId }, {}, {lean: true}, function (err, movie) {
        if (err) {
            console.log(err);
        } else if (movie) {
            res.status(200);
            res.json(movie);
        } else {
            const message = {
                message: 'No movie is found'
            }
            res.json(message);
        }
    });
}

export default {
    getMovieList,
    getMovieDetail
}
