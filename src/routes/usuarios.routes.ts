import { Router } from 'express';
import knex from '../database/connection';

const usuariosRouter = Router();

usuariosRouter.get('/', async (request, response)=>{
});

export default usuariosRouter;