const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const itemRouter = require('./routes/items-routes');
const userRouter = require('./routes/user-routes');
const orderRouter = require('./routes/order-routes');
const app = express();
const PORT = 3000
app.use(morgan('short'))
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());

app.use('/item', itemRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);


app.use((err, req, res, next) => {
    reds.status(500).send({
        mesage: 'Something went wrong',
        error: err
    });
});



app.listen(PORT, () => {
    console.log('Server running on port:' + PORT)
});


module.exports = app;