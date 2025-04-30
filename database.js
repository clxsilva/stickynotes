const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:123Senac@cluster01.tfyg0.mongodb.net/dbnote'

let connected = false
const connectDB = async () => {
    if (!connected) {
        try {
            await mongoose.connect(url)
            connected = true
            console.log("MongoDB Connect")
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

const disconnectDB = async () => {
    if (connected) {
        try {
            await mongoose.disconnect(url)
            connected = false
            console.log("MongoDB Desconnect")
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}

module.exports = { connectDB, disconnectDB }