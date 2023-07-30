const router = require('express').Router();
const { workingTeam } = require('../../modules/teamFounderSchema');
require('../../db/connection');


router.get('/', async (req, res)=>{
    
    try{

        const data = await workingTeam.find();

        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router;