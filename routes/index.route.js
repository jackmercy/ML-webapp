import express from 'express';
import productRoute from './product.route';
import movieRoute from './movie.route'

// import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/check', (req, res) =>
  res.send('Hello hooman!')
);

router.use('/product', productRoute);
router.use('/movie', movieRoute);


export default router;
