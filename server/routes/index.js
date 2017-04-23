var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/create-image', (req, res) => {
  const ls = spawn('echo', ['launching instances', `${req.body.imgType}, ${req.body.osType}`]);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send({ message: `child process exited with code ${code}` });
  });



})

module.exports = router;
