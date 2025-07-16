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


app.get('/api/tabla/:nombre', async (req, res) => {
  const nombreTabla = req.params.nombre;

  // Aquí deberías validar nombreTabla para evitar SQL Injection
  const tablasPermitidas = ['usuarios', 'productos', 'ordenes']; // ejemplo, pon tus tablas aquí
  if (!tablasPermitidas.includes(nombreTabla)) {
    return res.status(400).send('Tabla no permitida');
  }

  try {
    const [rows] = await connection.query(`SELECT * FROM \`${nombreTabla}\``);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error consultando la tabla');
  }
});
