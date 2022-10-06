const sequelize = require('../db');

const {DataTypes} = require('sequelize');

const shifts = sequelize.define('shifts',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    startedAt: {type: DataTypes.DATE},
    finishedAt: {type: DataTypes.DATE}
});

const Items = sequelize.define('items',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    price: {type: DataTypes.INTEGER}
});

const Sells = sequelize.define('sells',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    shiftId:{type: DataTypes.INTEGER },
    itemId:{type: DataTypes.INTEGER },
    price: {type: DataTypes.INTEGER}
});

shifts.hasMany(Sells);
Sells.belongsTo(shifts);

Sells.hasMany(Items);
Items.belongsTo(Sells);

module.exports = {
    shifts,
    Items,
    Sells
};