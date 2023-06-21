const app = require('./app');

const connection = require('./db/connection');

const PORT = 3001

app.listen(PORT, async () => {
  console.log(`Servidor ativo rodando na porta ${PORT}`);
});

// Código para testar o mysql dentro do listen:
// const [result] = await connection.execute('SELECT 1');
// if (result) {
//   console.log('MySQL connection OK');
// }