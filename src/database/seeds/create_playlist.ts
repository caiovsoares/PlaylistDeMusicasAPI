import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("playlist").del();

    // Inserts seed entries
    await knex("playlist").insert([
        { nome: "MinhaPlaylist", publica: false, usuarios_id: 1 },
        { nome: "So Pancadão", publica: true, usuarios_id: 3 },
        { nome: "Sofrência Falou Mais Alto", publica: false, usuarios_id: 1 },
        { nome: "Pagodin", publica: true, usuarios_id: 2 }
    ]);
};
