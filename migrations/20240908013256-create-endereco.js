'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // CPF deve ser único
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true, // Telefone pode ser nulo, caso queira permitir cadastro sem telefone
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pessoas');
  },
};
