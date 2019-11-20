const Sequelize = require('sequelize');

// Create sequalizer instance
const sequelize = new Sequelize(
    'bookstore',                 // Database
    'root',                 // Username
    '19manu95',                 // Password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Import Models
const Item = sequelize.import(__dirname + '/item-model');
const User = sequelize.import(__dirname + '/user-model');
const Order = sequelize.import(__dirname + '/order-model');


// Associations

    Item.belongsTo(Order);
    Order.hasMany(Item);

    Order.belongsTo(User);
    User.hasMany(Order);



// Sync models and add default data
sequelize.sync({ force: false }).then(() => {
    // Item.create({ title: 'test', price: 29.99, quantity: 10, releaseDate: '2015/06/10'});
    // User.create({ username: 'acetest', password: 'test', fullname: 'Afeez Asiru', address: '123 Vanilla Crream Drive' });
});

// Export models
module.exports = {
    Item,
    User,
    Order
};
