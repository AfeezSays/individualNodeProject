const express = require('express');
const models = require('../models');
const router = express.Router();
const bodyPaser = require('body-parser');
const session = require('express-session');

router.use(bodyPaser.json());
router.use(bodyPaser.urlencoded({ extended: false }));
router.use(session({
    secret: 'af32#@$RFaS',
    resave: false,
    saveUninitialized: true
}));
router.post('/register', async (req, res) => {
    const username = req.body.create_user_name;
    const password = req.body.create_password;
    const fullname = req.body.create_full_name;
    const address = req.body.create_address;
    const email = req.body.create_email;
    try {
        await models.User.create({
            id: null,
            username: username,
            password: password,
            fullname: fullname,
            address: address,
            email: email
        })
            .then(res.redirect('../login.html'));

    } catch (exc) {
        next(exc);
    }
});

router.post('/login', async (req, res) => {
    const name = req.body.login_user_name;
    const pass = req.body.login_password;
    try {
        const [result = null] = await models.User.findAll({ where: { username: name, password: pass } });
        if (result) {
            res.redirect('../index.html')
            res.send(JSON.stringify(result));
        } else {
            res.status(404).send({ message: 'incorrect username/password ' });
        }


    } catch (exc) {
        next(exc);
    }

});


router.get('/:user', async (req, res) => {

    try {
        await models.User.findAll({ where: { username: req.params.user } }).then(data => {
            res.json(data)
        });

    } catch (exc) {
        next(exc);
    }

});


router.post('/update', async (req, res) => {

    const username = req.body.create_user_name;
    const password = req.body.create_password;
    const fullname = req.body.create_full_name;
    const address = req.body.create_address;
    const email = req.body.create_email;

    try {
        models.User.update(
            // Values to update
            {
                username: username,
                password: password,
                fullname: fullname,
                address: address,
                email: email
            },
            { // Clause
                where: 
                {
                    username: username
                }
            }
        ).then(count => {
            res.redirect('../profile.html')
            console.log('Rows updated ' + count);
        });
      } catch (err) {
        next(err)
      }


});



router.get('/del/:user', async (req, res) => {

    try {
        models.User.destroy({
            where: {
                username: req.params.user
            }
        })
        .then(function (deletedRecord) {
            console.log(req.params.title);
            if(deletedRecord === 1){
                res.redirect('../index.html')
            }
            else
            {
                res.status(404).json({message:"record not found"})
            }
        })
        .catch(function (error){
            res.status(500).json(error);
        });
    } catch (exc) {
        next(exc);
    }

});







module.exports = router;
