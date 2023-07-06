const express = require('express')
const adminRouter  = express.Router();
const debug = require('debug')('app:adminRouter')
const { MongoClient } = require('mongodb')
const sessions = require('../data/sessions.json')


adminRouter.route('/')
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
            const response = await db.collection('sessions').insertMany(sessions);
            
            res.json(response)
        } catch (error) {
            debug(error.stack)
        }
        client.close()
    }())

})


module.exports = adminRouter;