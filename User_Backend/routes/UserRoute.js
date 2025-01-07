import express from 'express'; //stwp1: to load the express library
import {
        getUsers,
        getUserById,
        saveUser,
        updateUser,
        deleteUser
    } from '../controllers/UserController.js'; //step4: to load the controller

const router = express.Router(); // step2: to create the router object

router.get('/users', getUsers); // we are mapping the URL endpoints with the methods of the controller
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router; // step3: to export the router object


