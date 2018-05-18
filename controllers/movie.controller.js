import Movie from '../models/movie.model';

function getMovieList(req, res) {
    var page = Number(req.query.page);
    var moviePerPage = Number(req.query.perPage);
    Movie.find({}, function(err, movies) {
        if(err) {
            console.log('ERR');
        } else if(movies.length > 0) {
            res.json(movies);
        } else {
            const message = {
                message: 'No movie is found'
            }
            res.json(message);
        }
    }).skip((page - 1)*moviePerPage).limit(moviePerPage);
}

function getTotalMovie(req, res) {
    Movie.count({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            const obj = {
                total: result
            }
            res.json(obj);
        }
    })
}

//lean option -> return plain javascript object
function getMovieDetail(req, res) {
    var movieId = req.query.id;
    Movie.findOne({ id: movieId }, {}, {lean: true}, function (err, movie) {
        if (err) {
            console.log(err);
        } else if (movie) {
            res.sendStatus(200);
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
    getMovieDetail,
    getTotalMovie
}
