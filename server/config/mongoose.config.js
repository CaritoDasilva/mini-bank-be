const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bank_clients_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("We are making connection with the database, how cool is that!"))
    .catch(err => console.log('Something went wrong when connecting to the database, Im so so sorry!', err))