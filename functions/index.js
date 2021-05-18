const functions = require('firebase-functions');
const express = require('express');
const {addEntry} = require('./controllers/addEntry');
const {getAllEntries} = require('./controllers/getEntry');
const {deleteEntry} = require('./controllers/deleteEntry');
const {updateEntry} = require('./controllers/updateEntry');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();
app.get('/', (req, res) => res.status(200).send('Hey there!'));
app.post('/entries', addEntry);
app.get('/entries', getAllEntries);
app.delete('/entries/:entryId', deleteEntry);
app.patch('/entries/:entryId', updateEntry);
exports.app = functions.https.onRequest(app);
