import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.PORT || 3000;

// Aquí defines la conexión usando tu URL
const connectionConfig = {
  uri: 'mysql://root:LbfmswIfhTjGVSyWgDBtxzQvczhzdUWM@tramway.proxy.rlwy.net:13740/railway'
};

// Alternativamente parsear la URL para mysql2:
const connection = await mysql.createConnection({
  host: 'tramway.proxy.rlwy.net',
  user: 'root',
  password: 'LbfmswIfhTjGVSyWgDBtxzQvczhzdUWM',
  database: 'railway',
  port: 13740
});

app.get('/api/data', async (req, res) => {
  try {
    const [rows, fields] = await connection.query('SELECT * FROM tu_tabla'); //tu tabla
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error consultando la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});


// usar la API
fetch('https://tu-backend-railway-url/api/data')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // Aquí manipulas la data en tu web
  })
  .catch(err => console.error(err));
