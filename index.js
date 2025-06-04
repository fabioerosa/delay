const express = require('express');
const app = express();
app.use(express.json());

// Rota POST com delay (já existente)
app.post('/delay', async (req, res) => {
  setTimeout(() => {
    res.json({ status: 'ok' });
  }, 3000);
});

// 🆕 Rota GET com delay (nova)
app.get('/delay', async (req, res) => {
  setTimeout(() => {
    res.json({ status: 'ok' });
  }, 3000);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});
