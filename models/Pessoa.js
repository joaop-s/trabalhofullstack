// models/Pessoa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Certifique-se de apontar para o arquivo de configuração correto do Sequelize

const Pessoa = sequelize.define('Pessoa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'pessoas',
  timestamps: false,
});

module.exports = Pessoa;
