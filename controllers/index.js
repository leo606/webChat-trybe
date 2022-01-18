const express = require('express');

const router = express.Router();

const get = require('./chat/get');

router.get('/', get);

module.exports = router;