import { Router } from 'express';
import knex from '../database/connection';

const playlistRouter = Router();

playlistRouter.get('/', async (request, response)=>{

    const playlist = await knex('playlist').select('*');

    response.json(playlist);

});

playlistRouter.get('/:nome', async (request, response)=>{

    const { nome } = request.params;
    const playlist = await knex('playlist').select('*').where('nome','like',`%${nome}%`);

    response.json(playlist);

});

playlistRouter.get('/usuario/:usuario', async (request, response)=>{

    //Pega o nome do usuario passado por parametro
    const { usuario } = request.params;
    //Busca no Banco de Dados quais ids de usuarios que têm em seu nome o que foi passado por 
    //  parametro e então usa o map para transformar essa lista de objetos em uma lista de ids
    const usuarios = (await knex('usuarios').select('id').where('nome','like',`%${usuario}%`)).map((obj)=> obj.id);
    //Busca no banco de dados as playlist que pertencem aos usuários da lista de ids passados com o método whereIn
    const playlist = await knex('playlist').select('*').whereIn('usuarios_id', usuarios);

    response.json(playlist);

});

export default playlistRouter;