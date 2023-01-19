const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://127.0.0.1:27017/confusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected to Server');
    
    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test' }
        },{ 
            new: true 
        }).exec();
    })
    .then((dish) => {
        console.log(dish);
        dish.comments.push({
            rating: 5,
            comment: 'Sample comment',
            author: 'John Apples'
        });

        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        
        return Dishes.deleteMany({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
});