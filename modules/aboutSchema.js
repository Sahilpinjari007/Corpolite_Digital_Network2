const mongoose = require('mongoose');


const aboutSchema = mongoose.Schema({
    aboutDesc: {type: String, require: true}
});


const about = new mongoose.model('about', aboutSchema);

module.exports = about;