import { Router } from 'express';
import knex from '../database/connection';

const musicasRouter = Router();

musicasRouter.get('/', async (request, response) => {

    const musicas = await knex('musicas').select('*');

    response.json(musicas);

});

musicasRouter.post('/', async (request, response) => {

    console.log(request.body);
    const { nome, genero, artista, banda, link_spotify, link_youtube, link_google_drive } = request.body;
    const musica = { nome, genero, artista, banda, link_spotify, link_youtube, link_google_drive };

    await knex.insert(musica).into('musicas');

    response.json(musica);

});

musicasRouter.put('/', async (request, response) => {

    const { id, nome, genero, artista, banda, link_spotify, link_youtube, link_google_drive } = request.body;
    const musica = { nome, genero, artista, banda, link_spotify, link_youtube, link_google_drive };

    await knex('musicas')
        .where('id', id)
        .update(musica)

    response.json(musica);
});

musicasRouter.delete('/', async (request, response) => {

    const { id } = request.body;

    const result = await knex('musicas')
        .where('id', id)
        .del()

    if (result)
        return response.json({ message: "musica deletada" });
    return response.json({ message: `id [${id}] não encontrado` });
});

musicasRouter.get('/:nome', async (request, response) => {

    const { nome } = request.params;
    const musicas = await knex('musicas').select('*').where('nome', nome).first();

    if (!musicas)
        return response.json({ message: "Musica não encontrada" })
    return response.json(musicas);

});

musicasRouter.get('/artista/:artista', async (request, response) => {

    const { artista } = request.params;
    const musicas = await knex('musicas').select('*').where('artista', artista);

    if (!musicas[0])
        return response.json({ message: "Artista não encontrado" })
    response.json(musicas);

});

export default musicasRouter;