const mongoose = require('mongoose');
const username = "akshayy"
const password = "sumit9876"
// const { username, password } = process.env;
const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.n19hw8d.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0";

async function connectDb() {
    await mongoose.connect(connectionSrt);
    console.log("mongodB is connected....");
}

connectDb();

module.exports = { connectDb };