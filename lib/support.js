'use strict';

const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const support = path.join(cwd, 'test/support');

if (fs.existsSync(support)) {
  require(support);
}
