import { Router } from 'express';
import knex from '../database/connection';

const usuariosRouter = Router();

usuariosRouter.get('/', async (request, response)=>{
    const usuarios = await knex('usuarios').select('*');

    response.json(usuarios);

});

export default usuariosRouter;