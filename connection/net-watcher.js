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
  connection.write(`Now watching"${filename}"for changes...\n`);

  //Watchersetup.
  const watcher = fs.watch(filename, () => connection.write(`File changed:${new Date()}\n`));

  //Cleanup.
  connection.on('close', () => {
    console.log('Subscriber disconnected.');
    watcher.close();
  });

}).listen(60300, () => console.log('Listening for subscribers...'));
