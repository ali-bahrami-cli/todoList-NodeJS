const express = require('express')
const app = express()

//? middleWares
app.use(express.urlencoded({extended: false}))

//* set engine
app.set('view engine','ejs')
app.set('views', 'views')

//? Routes
app.use('/',require('./routes/index'))
app.use('/admin',require('./routes/admin'))

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})
