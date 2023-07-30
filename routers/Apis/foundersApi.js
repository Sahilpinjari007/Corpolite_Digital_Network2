const router = require('express').Router();
const { founders } = require('../../modules/teamFounderSchema');
require('../../db/connection');


router.get('/', async (req, res)=>{
    
    try{

        const data = await founders.find();

        res.status(200).send(data);
    }
    catch(err){
        res.status(404).send(err);
    }
});


module.exports = router;
