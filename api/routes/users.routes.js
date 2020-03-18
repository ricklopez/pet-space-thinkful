const express = require('express');
const router = express.Router();
const controller = require('./../controllers/users.controller');


// CRUD for Users
router.get('/', controller.getUsers);
router.get('/:userId', controller.getUsersById);
router.post('/', controller.createUser);
router.put('/:userId', controller.updateUser);
router.get('/:userId', controller.deleteUser);


module.exports = router;



