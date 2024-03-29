import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const getAllVelocities = async (req: Request, res: Response, next: NextFunction) => {
    return res.send('get all velocities');
}
const getVelocity = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.teamid;
    return res.send(`getTeamVelocity ${id}`);
}

export default { getAllVelocities, getVelocity };
