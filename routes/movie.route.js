import express from 'express';
import movieController from '../controllers/movie.controller';

const router = express.Router();

/* RouteBase: [api/movie] */

router.route('/list').get(movieController.getMovieList);

export default router;