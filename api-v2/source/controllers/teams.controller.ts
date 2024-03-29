import { Request, Response, NextFunction, query } from 'express';


const getAllTeams = async (req: Request, res: Response, next: NextFunction) => {
    const result = await queryDataBase('SELECT * from teams;');

    return res.send(result.rows);
}

const queryDataBase = async (query: string) => {
    const { Client } = require('pg')
    const client = new Client({
        user: 'admin',
        host: 'localhost',
        database: 'agiletools',
        password: 'mypassword',
        port: 5432,
    });

    await client.connect()

    return await client.query(query);
}
const getTeam = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    return res.send(`get team ${id}`);
}

export default { getAllTeams, getTeam };
