const mongoose = require('mongoose');


const servicesSchema = new mongoose.Schema({
    serviceHeading: {type: String, require: true},
    serviceImgUrl: {type: String, require: true},
    serviceDescri: {type: String, require: true}
});

const allServices = new mongoose.model('allServices', servicesSchema);
const homeService = new mongoose.model('homeServices', servicesSchema);

module.exports = {allServices, homeService};