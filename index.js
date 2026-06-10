const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS carros (
      id SERIAL PRIMARY KEY,
      Nome TEXT NOT NULL,
      Marca TEXT NOT NULL,
      Ano INTEGER NOT NULL,
      Placa TEXT NOT NULL
    )
  `);
}

app.get('/carros', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM carros ORDER BY id');
  res.json(rows);
});

app.post('/carros', async (req, res) => {
  const { Nome, Marca, Ano, Placa } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO carros (Nome,Marca,Ano,Placa) VALUES ($1, $2, $3, $4) RETURNING *',
    [Nome, Marca, Ano, Placa]
  );
  res.status(201).json(rows[0]);
});

app.delete('/carros/:id', async (req, res) => {
  await pool.query('DELETE FROM carros WHERE id=$1', [req.params.id]);
  res.json({ mensagem: 'Carro deletado' });
});

init().then(() => app.listen(3000, () => console.log('API rodando na porta 3000')));
