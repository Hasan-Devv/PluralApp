const express = require('express')
const app = express()
const debug = require('debug')('main')
const PORT = process.env.PORT || 57651
const morgan = require('morgan')
const path = require('path')
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter')
const authRouter = require('./src/routers/authRouter')
const passport = require('passport')
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({secret: "globomantics",
resave: true,
saveUninitialized: true}))


require('./src/config/passport.js')(app)

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});


app.set('views', './src/views');
app.set('view engine', 'ejs')

// Routers
app.use('/session', sessionsRouter)
app.use('/admin', adminRouter)
app.use('/auth', authRouter)


app.get('/', (req, res) => {
    res.render('index', {title: "Globalmantics", data: ['a','b','c']})
}) 
