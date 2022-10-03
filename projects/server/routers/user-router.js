import express from "express";
const router = express.Router();
// #import Controller
import { auth, getUsers } from '../controllers/userController';

router.get('/', getUsers);
router.post('/auth', auth);

export default router;