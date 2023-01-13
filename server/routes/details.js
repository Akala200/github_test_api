
import { Router } from 'express';
import githubController from '../controllers/githubController';

const router = Router();

const {
  getDetails
} = githubController;

router.get('/user', getDetails);


export default router;
