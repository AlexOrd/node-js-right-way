fs.watch(filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  let output = '';
  ls.stdout.on('data', chunk => {
    debugger
    output += chunk;
  });
  ls.on('close', () => {
    const parts = output.split(/\s+/);
    console.log([parts[0], parts[4], parts[8]]);
  });
});
