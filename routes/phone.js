const express = require('express');
const router = express.Router();

const phoneService = require('../services/phone.service');

router.get('/', phoneService.getPhones);

module.exports = router;