import { Router } from 'express';
import knex from '../database/connection';

const playlist_musicasRouter = Router();

playlist_musicasRouter.get('/', async (request, response) => {

    const playlist_musicas = await knex('playlist_musicas').select('*');

    response.json(playlist_musicas);

});

playlist_musicasRouter.delete('/', async (request, response) => {

    const { playlist_id, musicas_id } = request.body;

    const result = await knex('playlist_musicas')
        .where('playlist_id', playlist_id)
        .where('musicas_id', musicas_id)
        .del()

    if (result)
        return response.json({ message: "musica deletada da playlist" });
    return response.json({ message: `ids [${playlist_id}][${musicas_id}] não encontrados` });
});

export default playlist_musicasRouter;