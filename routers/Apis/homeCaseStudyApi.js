const router = require('express').Router();
const { homeCaseStudy } = require('../../modules/caseStudySchema');
require('../../db/connection');


router.get('/', async (req, res) => {

    try {
        const data = await homeCaseStudy.find();

        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})

module.exports = router;