const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080
const routes = require('./routes.js')

app.use(cors())

const listener = () => {
    console.log(`Menu Party on Port: ${port}`)
}

app.use('/', routes)

app.use((req, res, next)=>{
    const err = new Error("Nothing Found. There must be menus SOMEWHERE...");
    err.status = 404;
    next(err);

})

app.use((err, req, res)=>{
    res.status(err.status || 500)
        .json({
            message: err.message,

        })

})

app.listen(port, listener)
