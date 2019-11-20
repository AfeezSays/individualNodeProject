module.exports = (sequelize, DataTypes) => {
    return sequelize.define('order', {
        total: {
            type: DataTypes.FLOAT
        },
        shipped: {
            type: DataTypes.BOOLEAN
        }
    });
}
