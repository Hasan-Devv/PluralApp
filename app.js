const express = require('express')
const app = express()
const debug = require('debug')('main')
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const path = require('path')


app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});

app.set('views', './src/views');
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {title: "Globalmantics", data: ['a','b','c']})
}) 