import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("playlist_musicas").del();

    // Inserts seed entries
    await knex("playlist_musicas").insert([
        { playlist_id: 1, musicas_id: 3},
        { playlist_id: 1, musicas_id: 2},
        { playlist_id: 1, musicas_id: 6},
        { playlist_id: 2, musicas_id: 7},
        { playlist_id: 2, musicas_id: 9},
        { playlist_id: 2, musicas_id: 10},
        { playlist_id: 2, musicas_id: 14},
        { playlist_id: 2, musicas_id: 5},
        { playlist_id: 2, musicas_id: 1},
        { playlist_id: 3, musicas_id: 9},
        { playlist_id: 3, musicas_id: 8},
        { playlist_id: 4, musicas_id: 3},
        { playlist_id: 4, musicas_id: 11},
        { playlist_id: 4, musicas_id: 12},
        { playlist_id: 4, musicas_id: 15}
    ]);
};
