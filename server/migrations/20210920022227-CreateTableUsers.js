'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      name:{type: Sequelize.STRING, required: true},
      last_name:{type: Sequelize.STRING, required: true},
      address:{type: Sequelize.STRING, required: true},
      postal_code:{type: Sequelize.NUMBER, required: true},
      cell_phone_number:{type: Sequelize.NUMBER, required: true},
      password:{type: Sequelize.STRING, required: true},
      email:{type: Sequelize.STRING, required: true},
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};