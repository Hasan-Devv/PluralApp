const express = require('express')
const debug = require('debug')('app:sessionsRouter')
const { MongoClient, ObjectID } = require('mongodb')

const authRouter = express.Router()

authRouter.route('/signUp').post((req, res) => {
    //TODO create user
    req.login(req.body, () => {
        res.redirect('/profile')
    })
});

authRouter.route('/profile').get((req, res) => {
    res.json(req.user)
})




module.exports = authRouter;