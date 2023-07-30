const mongoose = require('mongoose');


const visionSchema = mongoose.Schema({
    visionDesc: {type: String, require: true}
})


const vision = mongoose.model("visionData", visionSchema);

module.exports = vision;