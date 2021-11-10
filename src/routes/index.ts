import { Router } from 'express';
import usuariosRouter from './usuarios.routes'
import musicasRouter from './musicas.routes'
import playlistRouter from './playlist.routes'
import playlist_musicasRouter from './playlist_musicas.routes'

const routes = Router();

routes.use('/usuarios',usuariosRouter);
routes.use('/musicas',musicasRouter);
routes.use('/playlist',playlistRouter);
routes.use('/playlist_musicas',playlist_musicasRouter);

routes.get('/', (request, response) => {
    return response.json({message: "Seja Bem Vindo"});
});

export default routes;