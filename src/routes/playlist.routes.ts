import { Router } from 'express';
import knex from '../database/connection';

const playlistRouter = Router();

playlistRouter.get('/', async (request, response) => {

    const playlist = await knex('playlist').select('*');

    response.json(playlist);

});

playlistRouter.post('/', async (request, response) => {

    const { nome, publica, usuarios_id, musicas } = request.body;
    const playlist = { nome, publica, usuarios_id };

    const transacao = await knex.transaction();

    const newIds = await transacao('playlist').insert(playlist);
    const playlist_id = newIds[0];

    const playlistMusicas = await Promise.all(musicas.map(async (id: number) => {
        const selectedMusica = await transacao('musicas').where('id', id).first();

        if (!selectedMusica) {
            return response.status(400).json({ message: `Musica não Cadastrada id[${id}]` })
        }

        return {
            playlist_id: playlist_id,
            musicas_id: id
        }
    }));

    await transacao('playlist_musicas').insert(playlistMusicas);

    transacao.commit();

    response.json(playlist);

});

playlistRouter.put('/', async (request, response) => {

    const { id, nome, publica, usuarios_id } = request.body;
    const playlist = { nome, publica, usuarios_id };

    await knex('playlist')
        .where('id', id)
        .update(playlist)

    response.json(playlist);
});

playlistRouter.delete('/', async (request, response) => {

    const { id } = request.body;

    const result = await knex('playlist')
        .where('id', id)
        .del()

    if (result)
        return response.json({ message: "playlist deletada" });
    return response.json({ message: `id [${id}] não encontrado` });
});

playlistRouter.get('/:nome', async (request, response) => {

    const { nome } = request.params;

    const playlist = await knex('playlist').where('nome', nome);

    if (!playlist[0])
        return response.status(400).json({ message: "Playlist não Encontrada" })

    const musicas = await knex('musicas')
        .join('playlist_musicas', 'musicas.id', '=', 'playlist_musicas.musicas_id')
        .where('playlist_musicas.playlist_id', '=', playlist[0].id)
        .select('nome')

    return response.json({ playlist, musicas });

});

playlistRouter.get('/usuario/:usuario', async (request, response) => {

    const { usuario } = request.params;

    const playlist = await knex('playlist')
        .join('usuarios', 'playlist.usuarios_id', '=', 'usuarios.id')
        .where('usuarios.nome', '=', usuario)
        .select('playlist.id', 'playlist.nome', 'playlist.publica', 'playlist.usuarios_id');

    if (!playlist[0])
        return response.status(400).json({ message: "Playlist não Encontrada" })

    const musicas = await knex('musicas')
        .join('playlist_musicas', 'musicas.id', '=', 'playlist_musicas.musicas_id')
        .where('playlist_musicas.playlist_id', '=', playlist[0].id)
        .select('nome')

    return response.json({ playlist, musicas });

});

export default playlistRouter;