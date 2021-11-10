import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("musicas").del();

    // Inserts seed entries
    await knex("musicas").insert([
        { nome: "Construção",genero: "MPB",artista: "Chico Buarque",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Epitáfio",genero: "Rock",artista: "Titãs",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Como Uma Onda",genero: "Pop",artista: "Lulu Santos",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Amor I Love You",genero: "Clássico",artista: "Marisa Monte",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Como É Grande o Meu Amor Por Você",genero: "Romantica",artista: "Roberto Carlos",banda: null, link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Como Nossos Pais",genero: "MPB",artista: "Elis Regina",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "País Tropical",genero: "Rock",artista: "Jorge Ben Jor",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Malandro é Malandro e Mané é Mané",genero: "Pagode",artista: "Bezerra da Silva",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Da Lama Ao Caos",genero: "Pop",artista: "Nação Zumbi",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Eu Quero É Botar Meu Bloco Na Rua",genero: "Samba",artista: "Sérgio Sampaio",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Panis Et Circenses",genero: "Rock",artista: "Os Mutantes",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Alegria, Alegria",genero: "Rock",artista: "Caetano Veloso",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "O Mundo É Um Moinho",genero: "MPB",artista: "Cartola",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Garota de Ipanema",genero: "Pagode",artista: "Tom Jobim",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null},
        { nome: "Trem das Onze",genero: "Rock",artista: "Demônios da Garoa",banda: null,link_spotify: null,link_youtube: null,link_google_drive: null}
    ]);
};
