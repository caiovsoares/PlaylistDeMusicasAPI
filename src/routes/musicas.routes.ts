import { Router } from 'express';
import knex from '../database/connection';

const musicasRouter = Router();

musicasRouter.get('/', async (request, response)=>{

    const musicas = await knex('musicas').select('*');

    response.json(musicas);

});

musicasRouter.get('/:nome', async (request, response)=>{

    const { nome } = request.params;
    const musicas = await knex('musicas').select('*').where('nome','like',`%${nome}%`);

    response.json(musicas);

});

musicasRouter.get('/artista/:artista', async (request, response)=>{

    const { artista } = request.params;
    const musicas = await knex('musicas').select('*').where('artista','like',`%${artista}%`);

    response.json(musicas);

});

export default musicasRouter;