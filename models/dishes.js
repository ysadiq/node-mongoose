const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const dishScehma = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
        timestamps: true
});

var Dishes = mongoose.model('Dish', dishScehma);

module.exports = Dishes;