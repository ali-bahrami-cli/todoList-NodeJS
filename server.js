const express = require('express')
const app = express()

const fs = require('fs')
const path = require('path')

//? middleWares
app.use(express.urlencoded({extended: false}))
const sequelize = require('./utils/db')

//* set engine
app.set('view engine','ejs')
app.set('views', 'views')

//? Routes
app.use('/',require('./routes/index'))
app.use('/admin',require('./routes/admin'))

sequelize.sync().then(r => {
    console.log(`DataBase connected to port ${r.config.port}`);
    app.listen(3000,()=>{
        console.log(`app is listening on port 3000`);
    })
})

