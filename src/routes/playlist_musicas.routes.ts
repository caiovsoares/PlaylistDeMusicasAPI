import { Router } from 'express';
import knex from '../database/connection';

const playlist_musicasRouter = Router();

playlist_musicasRouter.get('/', async (request, response)=>{
});

export default playlist_musicasRouter;