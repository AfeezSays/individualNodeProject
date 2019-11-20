module.exports = (sequalize, DataTypes) => {
    return sequalize.define('item', {
        title: {
            type: DataTypes.STRING
        },
         price: {
            type: DataTypes.FLOAT
        },
        quanity: {
            type: DataTypes.INTEGER
        },
        releaseDate: {
            type: DataTypes.DATEONLY
        },
        image: {
            type: DataTypes.STRING
        }
    });
}