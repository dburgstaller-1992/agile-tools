import { Request, Response, NextFunction } from 'express';

const getAllTeams = async (req: Request, res: Response, next: NextFunction) => {
    return res.send('get all teams');
}
const getTeam = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    return res.send(`get team ${id}`);
}

export default { getAllTeams, getTeam };
