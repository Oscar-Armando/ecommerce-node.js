'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects',{
      id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      usertId: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key: 'id',
          user: 'name',
          phone: 'cell_phone_number',
          e_mail: 'email'
        },
        onDelete: 'CASCADE'
      },
    nameProject: {type: Sequelize.STRING, required: true},
    projectDescription: {type: Sequelize.TEXT, required: true},
    budget: {type: Sequelize.FLOAT, required: true},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('projects');
  }
};