const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route   GET /:code
// @desc    Redirect to long/original URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code}); // req.params.code gets the code string passed from /:code

        if(url){
            return res.redirect(url.longUrl); // if we found the short urlCode, redirect to the long/original url
        } else {
            return res.status(404).json('No url found');  
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router

