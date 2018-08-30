'usestrict';

const fs = require('fs');

fs.watch('target.txt', (res) => {
  debugger;
  console.log(res);
});
console.log('Nowwatchingtarget.txtforchanges...');
