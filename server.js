const express = require ('express');
const { Client } = require('pg');
const cors = require ('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    database: 'BancoTarefas',
    user: 'postgres',
    password: '123',
});

client.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro de conexão', err.stack));