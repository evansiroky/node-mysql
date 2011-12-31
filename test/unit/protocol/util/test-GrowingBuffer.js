var common        = require('../../../common');
var assert        = require('assert');
var test          = require('utest');
var GrowingBuffer = require(common.dir.lib + '/protocol/util/GrowingBuffer');

test('GrowingBuffer', {
  'append 1 buffer': function() {
    var growingBuffer = new GrowingBuffer;
    var buffer        = new Buffer([1, 2, 3]);
    growingBuffer.append(buffer);

    assert.strictEqual(growingBuffer.toBuffer(), buffer);
    assert.equal(growingBuffer.length, buffer.length);
  },

  'append 2 buffers': function() {
    var growingBuffer = new GrowingBuffer;
    var buffer1       = new Buffer([1, 2]);
    var buffer2       = new Buffer([3, 4]);

    growingBuffer.append(buffer1);
    assert.equal(growingBuffer.length, buffer1.length);

    growingBuffer.append(buffer2);

    assert.equal(growingBuffer.length, buffer1.length + buffer2.length);
    assert.deepEqual(growingBuffer.toBuffer(), new Buffer([1, 2, 3, 4]));
  },
});

