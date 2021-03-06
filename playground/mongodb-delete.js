// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log(`Unable to connect to MongoDB server: ${error}`);
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     text: 'Eat lunch'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Patryk'
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b6c9cca97486f14bf3c6e07')
    })
    .then((result) => {
        console.log(result);
    });

    client.close();
})