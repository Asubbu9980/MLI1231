const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller')

router.post('/new' , jobController.createNewJob)
router.get('/' , jobController.getAllJobs);
router.get('/:id' , jobController.getOneJob)
router.put('/jobs/:id' , jobController.updateJob);



module.exports = router;

