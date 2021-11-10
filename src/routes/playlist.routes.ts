import { Router } from 'express';
import knex from '../database/connection';

const playlistRouter = Router();

playlistRouter.get('/', async (request, response)=>{
});

export default playlistRouter;