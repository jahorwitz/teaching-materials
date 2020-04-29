const express = require('express');
const cors = require('cors');
const app = express();
const Pool = require('pg-pool');
const bodyParser = require('body-parser');
const { databaseConfig } = require('./config');

app.use(cors());
app.use(bodyParser.json());

// Get all notes
app.get('/notes', async function(req, res) {
    const pool = new Pool(databaseConfig);
    const client = await pool.connect();
    const result = await client.query("select * from notes");
    client.release();
    res.send(result.rows);
});

app.listen(8081);