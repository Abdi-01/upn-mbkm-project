import express from "express";
const router = express.Router();
// #import Controller
import { auth, getUsers, regis } from '../controllers/userController';
import { check } from 'express-validator';
import { checkUser } from "../middleware/validator";

router.get('/', getUsers);
router.post('/auth',
    check('username').notEmpty().isAlphanumeric(),
    check('password').notEmpty().isStrongPassword({
        minLength: 5,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    }).withMessage('Password Invalid Input ❌'), auth);

router.post('/regis', checkUser, regis);
export default router;