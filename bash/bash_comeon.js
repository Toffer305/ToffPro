const spawn = require('child_process').spawn;
const omx = spawn('omxplayer', ['/var/www/node/mjpg/assets/comeon.m4a']);

omx.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

omx.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

omx.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

