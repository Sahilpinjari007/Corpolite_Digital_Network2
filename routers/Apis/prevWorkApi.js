const router = require('express').Router();
const prevWork = require('../../modules/prevWorkSchema');
require('../../db/connection');


router.get('/', async (req, res)=>{
    
    try{

        const data = await prevWork.find();

        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(404).send(err);
    }
});


module.exports = router;