'use strict';

const path = require('path');
const cwd = process.cwd();
const cassettes = path.join(cwd, 'test/cassettes');
const nock = require('nock');

const nockBack = nock.back;

nockBack.fixtures = cassettes;

global.HttpRecording = class HttpRecording {
  static stop() {
    nock.cleanAll();
    nock.enableNetConnect();
  }

  static start() {
    nockBack.setMode(process.env.RECORD ? 'record' : 'lockdown');
  }

  static recordOrPlayback(cassette, request) {
    const options = {
      after: () => nock.enableNetConnect(/localhost/),
      afterRecord: (outputs) => outputs.filter(o => !o.scope.match(/localhost/))
    };
    nockBack(`${cassette}.json`, options, (nockDone) => request(nockDone));
  }
};
