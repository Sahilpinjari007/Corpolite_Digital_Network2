const mongoose = require('mongoose');


const homeCaseStudySchema = new mongoose.Schema({

    imgUrl: {type: String, require: true},
    heading: {type: String, require: true},
    role: {type: String, require: true}
});


const allCaseStudySchema = new mongoose.Schema({
    imgUrl: {type: String, require: true},
    heading: {type: String, require: true},
    desc: {type: String, require: true}
})


const homeCaseStudy = new mongoose.model('homeCaseStudys', homeCaseStudySchema);
const allCaseStudy = new mongoose.model('allCaseStudys', allCaseStudySchema);

module.exports = {homeCaseStudy, allCaseStudy};