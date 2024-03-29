import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const getAllFeatures = async (req: Request, res: Response, next: NextFunction) => {
    return res.send('get all features');
}
const getFeature = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    return res.send(`get feature ${id}`);
}

export default { getAllFeatures, getFeature };
