// routes/pessoaRoutes.js
const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController');

router.post('/pessoas', PessoaController.createPessoa);
router.get('/pessoas', PessoaController.getAllPessoas);
router.get('/pessoas/:id', PessoaController.getPessoaById);
router.put('/pessoas/:id', PessoaController.updatePessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);

module.exports = router;
