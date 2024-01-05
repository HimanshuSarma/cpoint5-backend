const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoDBConnection = await mongoose.createConnection(process.env.MONGOURI);

    mongoDBConnection.on('connected', () => {
        console.log('Connected to DB.');
    })

    global.models = {
        INVENTORY: require('../models/inventory')(mongoDBConnection),
        GROCERY: require('../models/grocery')(mongoDBConnection),
    }
} 

module.exports = connectDB;