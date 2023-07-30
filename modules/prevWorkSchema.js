const mongoose = require('mongoose');


const prevWrokSchema = mongoose.Schema({
    compunyImg: {type: String, require: true}
});

const prevWork = mongoose.model('prevWork', prevWrokSchema);
module.exports = prevWork;