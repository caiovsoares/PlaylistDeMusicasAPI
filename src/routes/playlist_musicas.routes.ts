import { Router } from 'express';
import knex from '../database/connection';

const playlist_musicasRouter = Router();

playlist_musicasRouter.get('/', async (request, response)=>{

    const playlist_musicas = await knex('playlist_musicas').select('*');

    response.json(playlist_musicas);

});

export default playlist_musicasRouter;