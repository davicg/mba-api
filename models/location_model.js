var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/mydb');

var locationSchema = new Schema({
    userId: String,
    latitude: String,
    longitude: String
});
 
module.exports = mongoose.model('Location', locationSchema);
