import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('musicas', (table)=>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('genero').notNullable();
        table.string('artista').notNullable();
        table.string('banda');
        table.string('link_spotify');
        table.string('link_youtube');
        table.string('link_google_drive');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('musicas');
}

