const express = require('express')
const app = express()
const debug = require('debug')('main')
const PORT = process.env.PORT || 62937
const morgan = require('morgan')
const path = require('path')
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter')

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});


app.set('views', './src/views');
app.set('view engine', 'ejs')

// Routers
app.use('/session', sessionsRouter)
app.use('/admin', adminRouter)

app.get('/', (req, res) => {
    res.render('index', {title: "Globalmantics", data: ['a','b','c']})
}) 
