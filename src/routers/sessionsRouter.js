const express = require('express')
const sessions = require('../data/sessions.json')
const sessionsRouter = express.Router()
const debug = require('debug')('app:sessionsRouter')
const { MongoClient, ObjectID } = require('mongodb')


sessionsRouter.route('/')
 .get((req, res) => {
    const url = 
    "mongodb+srv://dbUser:DqkWD2BFXrNnpCbr@globomantics.wsycduk.mongodb.net/?retryWrites=true&w=majority"
    const dbName = 'globomantics';

    (async function mongo(){
        let client;
  
        try{
            
            client = await MongoClient.connect(url)
            // debug('Connected to the mongo DB')

            const db = client.db(dbName)
            const sessions = await db.collection('sessions').find().toArray();
            
            res.render('sessions', {sessions})
        } catch (error) {
            debug(error.stack)
        }
        client.close()
    }())
    })

 // a few errors in this piece of code
 
sessionsRouter.route('/:id')
 .get((req, res) => {
    const id = req.params.id
        // res.render("session", {sessions: sessions[id]} )
        const url = 
    "mongodb+srv://dbUser:DqkWD2BFXrNnpCbr@globomantics.wsycduk.mongodb.net/?retryWrites=true&w=majority"
    const dbName = 'globomantics';

    (async function mongo(){
        let client;
  
        try{
            
            client = await MongoClient.connect(url)
            // debug('Connected to the mongo DB')

            const db = client.db(dbName)
            const session = await db.collection('sessions').findOne({_id : new ObjectID(id)});
            
            res.render('session', { session, } )
        } catch (error) {
            debug(error.stack)
        }
        client.close()
    }())
    })

module.exports = sessionsRouter;