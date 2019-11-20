const express = require('express');
const models = require('../models');
const router = express.Router();

const bodyPaser = require('body-parser');
const session = require('express-session');

router.use(bodyPaser.json());
router.use(bodyPaser.urlencoded({ extended: false }));

router.post('/insert', async (req, res) => {
    const userid = req.body.userID;
    const total = req.body.total;
    try {
         await models.Order.create({
            total: total,
            userId: userid
            
            
        })
        .then(res.redirect('../index.html')
        );
    } catch (exc) {
        next(exc);
    }
});

router.get('/alls', async (req, res) => {
  
    try {
         await models.Order.findAll().then(data=>{
             res.json(data)
         });
         
   } catch (exc) {
       next(exc);
   }
    
});

module.exports = router;
