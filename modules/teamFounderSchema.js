const mongoose = require('mongoose');


const temaFounderSchema = mongoose.Schema({
    img: { type: String, require: true },
    name: { type: String, require: true },
    role: { type: String, require: true },
    facbookLink: { type: String, require: true },
    twitterLink: { type: String, require: true },
    instaLink: { type: String, require: true },
    linkedlnLink: { type: String, require: true }
});


const workingTeam = mongoose.model('workingTeam', temaFounderSchema);
const founders = mongoose.model('compunyFounders', temaFounderSchema);

module.exports = {workingTeam, founders};