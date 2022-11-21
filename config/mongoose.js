const mongoose = require("mongoose");
const mongoDB = 'mongodb+srv://guiarec:Provisoria123@guiarec.lapl35k.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const ConnectionDatabase = async () => {
    const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
if(db.readyState=1)console.log("Database connected");
}
module.exports = ConnectionDatabase;
