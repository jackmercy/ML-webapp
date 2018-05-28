import express from 'express';
import movieRoute from './movie.route';
import userRoute from './user.route';

// import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/check', (req, res) =>
  res.send('Hello hooman!')
);

router.use('/movie', movieRoute);
router.use('/user', userRoute);


export default router;
