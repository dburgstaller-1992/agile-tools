import express from "express";
import featureController from "../controllers/feature.controller";

const router = express.Router();

router.get('/',featureController.getAllFeatures);
router.get('/:id', featureController.getFeature);


export default router;