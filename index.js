const express = require('express');
const app = express();
app.use(express.json());

app.post('/delay', async (req, res) => {
  setTimeout(() => {
    res.json({ status: 'ok' });
  }, 3000); // 3 segundos
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});
