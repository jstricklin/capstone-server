const express = require('express');
const router = express.Router();
const queries = require('./queries.js')

router.get('/menus', (req, res, next)=>{
    let dummyData = queries.getDummyData()
    res.send({menus: dummyData})
})

router.get('/menu/:id', (req, res, next)=> {
    let dummyMenu = queries.getDummyMenu(req.params.id)
    res.send({menu: dummyMenu})
})


module.exports = router;
