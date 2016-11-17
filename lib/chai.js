const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request
global.fail = (e) => global.expect.fail(null, e, e.message);
