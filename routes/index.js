var express = require('express');
var router = express.Router();
var util = require('../utils/utils');

router.get('/directories', function (req, res, next) {
  util.listRepoDirectories()
	.then(data => res.json(data))
	.catch(err=>res.status(400).json(err));
		
});

router.post('/files', function (req, res, next) {
	let testPath = req.body.filePath;
	util.copyFilesToCommitDir(testPath)
		.then(data => res.json(data))
		.catch(err => res.status(400).json(err));	
});

module.exports = router;
