const chai = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = chai.expect;
global.fail = (e) => global.expect.fail(null, e, e.message);
