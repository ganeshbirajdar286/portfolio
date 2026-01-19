import express from 'express'
import { sendEmail } from '../component/email.service.js';

const router=express.Router();
router.post("/sendEmail",sendEmail);

export default router;   