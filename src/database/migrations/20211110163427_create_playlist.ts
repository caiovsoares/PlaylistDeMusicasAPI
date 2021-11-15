import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('playlist', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.boolean('publica').notNullable();
        table.integer('usuarios_id').unsigned().notNullable()
        table.foreign('usuarios_id')
            .references('id')
            .inTable('usuarios');
    });
}


export async function down(knex: Knex): Promise<void> {

    return knex.schema.dropTable('playlist');
}

