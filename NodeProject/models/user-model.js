module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fullname: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    });
}
