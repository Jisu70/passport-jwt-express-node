import { localAuth } from '../../controllers/auth.controller.js';
import { Router } from 'express';
import passport from "../../config/passport.config.js"
const router = Router();

router.use('/auth/local', localAuth);

export default router;