const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.fail = (e) => global.expect.fail(null, e, e.message);
