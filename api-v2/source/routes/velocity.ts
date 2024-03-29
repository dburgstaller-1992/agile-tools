import express from "express";
import velocityController from "../controllers/velocity.controller";


const router = express.Router();

router.get('/', velocityController.getAllVelocities);
router.get('/:teamid', velocityController.getVelocity);


export default router;