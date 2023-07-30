const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    slideImgUrl: {
        type: String,
        require: true
    },
    slideAtHeaBeforHeading: {
        type: String,
        require: true
    },
    slideAtHeaAfterHeading: {
        type: String,
        require: true
    },
    slideAtHeading: {
        type: String,
        require: true
    },
    slideDes: {
        type: String,
        require: true
    },
    slideBgColorCode: {
        type: String,
        require: true
    },
    slideHeDeColorCode: {
        type: String,
        require: true
    },
    slideAtHeaColorCode: {
        type: String,
        require: true
    },
})

const slide = new mongoose.model('sliderSlides', slideSchema);

module.exports = slide;