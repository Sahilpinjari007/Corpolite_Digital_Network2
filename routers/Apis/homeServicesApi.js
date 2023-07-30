const router = require('express').Router();
const { homeService } = require('../../modules/servicesSchema');
require('../../db/connection');


router.get('/', async (req, res) => {

    try {
        const data = await homeService.find();

        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})



module.exports = router;