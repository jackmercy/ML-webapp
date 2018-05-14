import express from 'express';
import movieController from '../controllers/movie.controller';

const router = express.Router();

/* RouteBase: [api/movie] */

router.route('/list').get(movieController.getMovieList);
router.route('/detail').get(movieController.getMovieDetail);

export default router;
