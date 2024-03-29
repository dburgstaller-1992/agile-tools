import express from 'express';
import teams from './teams';
import feature from './feature';
import velocity from './velocity';

const router = express.Router();

router.use('/teams', teams);
router.use('/features', feature);
router.use('/velocity',velocity);

export default router; 