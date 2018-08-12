// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log(`Unable to connect to MongoDB server: ${error}`);
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find(
    //     { 
    //         _id: new ObjectID('5b6c994c7d6c42137388ecfc')
    //     }, {})
    //     .toArray()
    //     .then(docs => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, null, 2));
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    // db.collection('Todos').find(
    //     { 
    //         _id: new ObjectID('5b6c994c7d6c42137388ecfc')
    //     }, {})
    //     .count()
    //     .then(count => {
    //         console.log('Todos');
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    db.collection('Users').find(
        { 
            name: 'Patryk'
        })
        .project({
            name: 1
        })
        .toArray()
        .then(docs => {
            console.log('Users');
            console.log(JSON.stringify(docs, null, 2));
        })
        .catch(err => {
            console.log(err);
        })

    client.close();
})