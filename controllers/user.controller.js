import User from '../models/user.model';


/* POTS: [/login] */
/* req JSON {
    "id": "0432",
    "password": "123456"
} */
function postLogin(req, res) {
    const user = new User(req.body);

    if(!req.body.password) {
        res.send('Password is required');
        return;
    } else if(!req.body.id) {
        res.send('ID is required');
        return;
    }

    // handle login request in mongodb - should move those lines into model method
    // see documentation at : http://mongoosejs.com/docs/guide.html
    User.findOne({id: user.id, password: user.password}, function(err, user) {
        if(err) {
            console.log('ERR');
        } else if(user) {
            res.status(200);
            const res_user = {
                id: user.id,
                name: user.name
            }
            res.json(res_user);
        } else {
            const message = {
                message: 'Invalid username or password'
            }
            res.json(message);
        }
    });

}

export default {
    postLogin
}
