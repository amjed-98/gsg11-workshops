const { join } = require('path');
const express = require('express');

const router = express.Router();

const getPrograms = require('../controllers/getPrograms');
const { getDataFromProgram, getDataFromUser } = require('../controllers/getData');
const { notFoundError, serverError } = require('../controllers/error');
const { removeMember } = require('../controllers/removeMember');
const getMembers = require('../database/queries/getMembers');

router.use(express.static(join(__dirname, '..', '..', 'public')));

router.post('/add_user', getDataFromUser);

router.post('/add_program', getDataFromProgram);

router.get('/get_program', getPrograms);

router.delete('/member', removeMember);

router.get('/members', (req, res) => getMembers().then((data) => res.send(data.rows)));

router.use(notFoundError);

router.use(serverError);

module.exports = router;
