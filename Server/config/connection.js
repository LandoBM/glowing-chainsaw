// const { connect, connection } = require('mongoose')

// const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/newApp'

// connect(connectionString, {
//     useNewURLParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = connection

require('dotenv').config()
const Sequelize =  require('sequelize')


const sequelize = new Sequelize (
    process.env.JAWSDB_URL, 
    {
        dialect: 'mysql'
    })

module.exports = sequelize