const { Datatypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('projects',{
    id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
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
    nameProject: {type: DataTypes.STRING, required: true},
    projectDescription: {type: DataTypes.TEXT, required: true},
    budget: {type: DataTypes.FLOAT, required: true},
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
});