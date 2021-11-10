import { Router } from 'express';
import knex from '../database/connection';

const musicasRouter = Router();

musicasRouter.get('/', async (request, response)=>{
});

export default musicasRouter;