const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://kristenwuori:Kaidyn117!@cluster0.hbe8mnq.mongodb.net/reactPortfolioDb?retryWrites=true&w=majority')
    
        console.log(`Mongo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB;