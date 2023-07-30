const router = require('express').Router();
const vision = require('../../modules/visionSchema');
require('../../db/connection');


router.get('/', async (req, res)=>{
    
    try{

        const data = await vision.find();

        res.status(200).send(data);
    }
    catch(err){
        res.status(404).send(err);
    }
})

module.exports = router;