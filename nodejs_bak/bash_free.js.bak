const spawn = require('child_process').spawn;
const free = spawn('free');

free.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

free.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

free.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
