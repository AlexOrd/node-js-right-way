'usestrict';
const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) {
  throw Error('Error: No file name specified.');
}

net.createServer(connection => {
  //Reporting.
  debugger
  console.log('Subscriber connected.');
  const firsConnectionJSONString = JSON.stringify({ type:'watching', file: filename }) + '\n';
  connection.write(firsConnectionJSONString);

  //Watchersetup.
  const watcher = fs.watch(filename, () => connection.write(
    JSON.stringify({ type:'changed', timestamp: Date.now() }) + '\n'
  ));

  //Cleanup.
  connection.on('close', () => {
    console.log('Subscriber disconnected.');
    watcher.close();
  });

}).listen(60300, () => console.log('Listening for subscribers...'));
