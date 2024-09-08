// controllers/PessoaController.js
const Pessoa = require('../models/Pessoa');

// Criar Pessoa
exports.createPessoa = async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;

    const novaPessoa = await Pessoa.create({
      nome,
      cpf,
      telefone,
    });

    res.status(201).json(novaPessoa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
  }
};

// Listar todas as Pessoas
exports.getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
  }
};

// Buscar Pessoa por ID
exports.getPessoaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message });
  }
};

// Atualizar Pessoa
exports.updatePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, cpf, telefone } = req.body;

    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    pessoa.nome = nome;
    pessoa.cpf = cpf;
    pessoa.telefone = telefone;

    await pessoa.save();

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pessoa', details: error.message });
  }
};

// Deletar Pessoa
exports.deletePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    await pessoa.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pessoa', details: error.message });
  }
};
