import express from 'express';
import userController from '../controllers/user.controller';

var router = express.Router();

/* Route: [/user] */

router.route('/login')
        .post(userController.postLogin);
export default router;
