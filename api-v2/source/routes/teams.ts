import express from "express";

import teamsController from '../controllers/teams.controller';

const router = express.Router();

router.get('/', teamsController.getAllTeams);
router.get('/:id', teamsController.getTeam);


export default router;