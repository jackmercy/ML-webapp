import Product from '../models/product.model';


/* GET: [/list] */
function getProductList(req, res) {
    Product.find({}, function(err, products) {
        if(err) {
            console.log('ERR');
        } else if(products.length > 0) {
            res.status(200);
            res.json(products);
        } else {
            const message = {
                message: 'No product is found'
            }
            res.json(message);
        }
    });
}

export default {
    getProductList
}
