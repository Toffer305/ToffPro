var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var path = require('path');
var app = express();
const fork = require('child_process').fork;

//Express Routes to Forked Node Apps
app.get('/ls', function (req, res) {
  const child = fork('./bash_ls.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ls command fired OK!\n');
});

app.get('/free', function (req, res) {
  const child = fork('./bash_free.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('free command fired OK!\n');
});

app.get('/howdy', function (req, res) {
  const child = fork('./bash_echo.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Howdy Echo command fired OK!\n');
});

app.get('/hado', function (req, res) {
  const child = fork('./bash_hado.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hado command fired OK!\n');
});

app.get('/tornado', function (req, res) {
  const child = fork('./bash_tornado.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Tornado command fired OK!\n');
});

app.get('/comeon', function (req, res) {
  const child = fork('./bash_comeon.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Kendake command fired OK!\n');
});

app.get('/myah', function (req, res) {
  const child = fork('./bash_myah.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Myah command fired OK!\n');
});

app.get('/notime', function (req, res) {
  const child = fork('./bash_notime.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('No Time command fired OK!\n');
});

app.get('/weak', function (req, res) {
  const child = fork('./bash_weak.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Weak command fired OK!\n');
});

app.get('/airhorn', function (req, res) {
  const child = fork('./bash_airhorn.js');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Airhorn command fired OK!\n');
});


//Defining path 'public' for Static File Serving
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index1.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=1').proxyRequest);
app.get('/index2.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=2').proxyRequest);
app.get('/index3.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=3').proxyRequest);
app.get('/index4.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=4').proxyRequest);
app.get('/index5.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=5').proxyRequest);
app.get('/index6.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=6').proxyRequest);
app.get('/index7.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=7').proxyRequest);
app.get('/index8.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=8').proxyRequest);
app.get('/index9.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=9').proxyRequest);
app.get('/index10.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=10').proxyRequest);
app.get('/index11.jpg', new MjpegProxy('http://andrew:bootup@192.168.2.7:100/cgi-bin/mjpg/video.cgi?channel=11').proxyRequest);

// Digest auth test space
//app.get('/index12.jpg', new MjpegProxy('http://andrew:bootup@10.0.1.201/cgi-bin/mjpg/video.cgi?channel=1').proxyRequest);
// FYI, it didn't work.  Digest auth not support by _http_client.js

// 404 Catch All

app.use("*",function(req,res){
  res.status(404).send('404');
});

app.listen(80);
