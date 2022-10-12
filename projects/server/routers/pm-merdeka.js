import express from 'express';
import { getData } from '../controllers/pm_merdekaController';
const router = express.Router();

router.get('/data', getData);

export default router;