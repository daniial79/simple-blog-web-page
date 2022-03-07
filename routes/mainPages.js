//third parti packages and libs
const Router = require('express').Router;

//setting up router
const router = Router();

//importing section 
const mainPagesController = require('../controllers/mainPages');


router.get('/', mainPagesController.getLandingPage);

router.get('/about', mainPagesController.getAboutPage);





//exporting section 
module.exports = router;