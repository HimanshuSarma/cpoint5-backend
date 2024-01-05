const router = require('express').Router();
const groceryControllers = require('../controllers/groceries/index');

router.post('/single', 
    groceryControllers.createGrocery.validate,
    groceryControllers.createGrocery.handler
);

router.get('/all', 
    groceryControllers.getAllGroceries.handler
);


module.exports = router;
