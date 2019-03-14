const spawn = require('child_process').spawn;
const echo = spawn('echo', ['hello friend']);

echo.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

echo.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

echo.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
