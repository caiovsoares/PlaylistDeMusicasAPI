import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('playlist_musicas', (table)=>{
        table.integer('playlist_id')
            .notNullable()
            .references('id')
            .inTable('playlist');

        table.integer('musicas_id')
            .notNullable()
            .references('id')
            .inTable('musicas');

        table.primary(['playlist_id','musicas_id']);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('playlist_musicas');
}

