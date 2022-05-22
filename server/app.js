const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose'); 
const app = express(); 
const cors = require('cors');

app.use(cors())
mongoose.connect("mongodb+srv://rayane:azerty71@cluster0.qdk3m.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-g89q69-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true");
mongoose.connection.once('open', () => {
    console.log('connected to the database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Now listening for requests on report 4000")
}); 