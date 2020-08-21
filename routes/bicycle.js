const express = require('express');
const router = express.Router();
const bicycleController = require('../controllers/bicycle');

router.get('/', bicycleController.bicycle_list);
router.get('/create', bicycleController.bicycle_create_get);
router.post('/create', bicycleController.bicycle_create_post);
router.get('/:id/update', bicycleController.bicycle_update_get);
router.post('/:id/update', bicycleController.bicycle_update_post);
router.post('/:id/delete', bicycleController.bicycle_delete_post);

module.exports = router;