var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('about/about', {page: 'About Us', menuId: 'about'});
});

module.exports = router;