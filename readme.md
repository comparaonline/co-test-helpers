# Simple test helpers

## Usage:
Just add `--require co-test-helpers` to your `test/mocha.opts`

## Features:
Require `test/support` on start if present. Use it for your own project's
helpers / initialization.

Exports the following globals:
- expect (chai.expect) with sinonChai
- sinon
- fakeTime (helper for sinon.useFakeTimers)
- HttpRecording (helper for nock)


### fakeTime
It's a function with two arguments:
  - options: passed to `sinon.useFakeTimers`
  - fn: the function that will be executed with the fake time. It can receive
    two optional arguments, `done` (a function to call when async operations
    finished), and `clock` (the `sinon.useFakeTimers` return object).

### HttpRecording
It simplifies recording/playing nock cassettes.
If you are using it you should `HttpRecording.start()` before each test and
`HttpRecording.stop()` after each.

Your http calls should be wrapped in `HttpRecording.recordOrPlayback()` method.
It receives two arguments, first the cassette name (it should be located on
`test/cassettes`), and a function (which receives a `done` function parameter to
call when finished).
