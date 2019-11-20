const express = require('express');
const models = require('../models');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/alls', async (req, res) => {

    try {
         await models.Item.findAll().then(data=>{
             res.json(data)
         });
         
   } catch (exc) {
       next(exc);
   }
    
});
router.get('/alls/:s', async (req, res) => {
  
    try {
         await models.Item.findAll({ where: { title: { [Op.like]: '%'+req.params.s+'%' } }}).then(data=>{
             res.json(data)
         });
         
   } catch (exc) {
       next(exc);
   }
    
});




module.exports = router;
