const express = require('express');
const router = express.Router();
const bicycleController = require('../../controllers/api/bicycleControllerApi');

router.get('/', bicycleController.bicycle_list);
router.post('/create', bicycleController.bicycle_create);
router.delete('/delete', bicycleController.bicycle_delete);

module.exports = router;