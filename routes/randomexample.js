const router = require('express').Router();
const { auth } = require('./verifyToken');


router.get('/',auth,(req,res) => {
    res.json({
        posts:{
            title: 'tiriwrw',
            description: "Deep is god",
        }
    })
})

module.exports = router;