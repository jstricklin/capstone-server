const express = require('express');
const router = express.Router();
const queries = require('./queries.js')

router.get('/menus', (req, res, next)=>{
    let dummyData = queries.getDummyData()
    res.send({menus: dummyData})
})


module.exports = router;
