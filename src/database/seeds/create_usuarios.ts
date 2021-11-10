import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("usuarios").del();

    // Inserts seed entries
    await knex("usuarios").insert([
        { nome: "Liz Eloá Emilly Almada", login: "emilly", senha: "yllime" },
        { nome: "Raimundo Ian Cardoso", login: "raimundo", senha: "odnumiar" },
        { nome: "Edson Cauê Samuel Jesus", login: "edson", senha: "nosde" },
        { nome: "Nina Marina Alana Teixeira", login: "nina", senha: "anin" }
    ]);
};
