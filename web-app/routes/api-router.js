var express = require('express');
var router = express.Router();
const apiController = require("../controllers/api-controller");

/* GET users listing. */
router.get('/generateProof', apiController.getGenerateProof);



// error handler
router.use(apiController.apiErrorHandler);
module.exports = router;
