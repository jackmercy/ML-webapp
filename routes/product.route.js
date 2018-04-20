import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();

/* RouteBase: [/product] */

router.route('/list')
        .get(productController.getProductList);

export default router;
