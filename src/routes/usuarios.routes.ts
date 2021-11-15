import { Router } from 'express';
import knex from '../database/connection';

const usuariosRouter = Router();

usuariosRouter.get('/', async (request, response) => {
    const usuarios = await knex('usuarios').select('*');

    response.json(usuarios);

});

usuariosRouter.post('/', async (request, response) => {

    const { nome, login, senha } = request.body;
    const usuario = { nome, login, senha };

    await knex.insert(usuario).into('usuarios');

    response.json(usuario);
});

usuariosRouter.put('/', async (request, response) => {

    const { id, nome, login, senha } = request.body;
    const usuario = { nome, login, senha };

    await knex('usuarios')
        .where('id', id)
        .update(usuario)

    response.json(usuario);
});

usuariosRouter.delete('/', async (request, response) => {

    const { id } = request.body;

    const result = await knex('usuarios')
        .where('id', id)
        .del()

    if (result)
        return response.json({ message: "usuario deletado" });
    return response.json({ message: `id [${id}] não encontrado` });
});

export default usuariosRouter;