// app.js ou server.js
const express = require('express');
const app = express();
const pessoaRoutes = require('./routes/pessoaRoutes');

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', pessoaRoutes);

// Inicialização do Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
