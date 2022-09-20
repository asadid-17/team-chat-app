const mongoose = require('mongoose');

const db = 'chatapp';
const dbUrl = `mongodb+srv://asad:asad1@cluster0.jyiwvhv.mongodb.net/test`;

// Asynchronous Function - returns Promise
mongoose.connect(dbUrl)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;