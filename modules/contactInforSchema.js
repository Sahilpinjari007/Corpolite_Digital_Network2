const mongoose = require('mongoose');


const contactInforSchema = mongoose.Schema({

    email: {type: String, require: true},
    phone1: {type: String, require: true},
    phone2: {type: String, require: true},
    address: {type: String, require: true},
    webUrl: {type: String, require: true},
    facbookLink: { type: String, require: true },
    twitterLink: { type: String, require: true },
    instaLink: { type: String, require: true },
    linkedlnLink: { type: String, require: true }
})


const contactInformation = new mongoose.model('compunyContactInfo', contactInforSchema);
module.exports = contactInformation;