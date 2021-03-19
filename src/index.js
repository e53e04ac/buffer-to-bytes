/*!
 * buffer-to-bytes/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const { BufferToBytes } = (() => {

    /** @typedef BufferToBytesConstructorOptions @type {import('../types').BufferToBytesConstructorOptions} */
    /** @typedef _BufferToBytes @type {import('../types')._BufferToBytes} */
    /** @typedef BufferToBytes @type {import('../types').BufferToBytes} */
    /** @typedef BufferToBytesConstructor @type {import('../types').BufferToBytesConstructor} */

    /** @type {BufferToBytesConstructor}  */
    const BufferToBytes = (options) => {

        /** @type {BufferToBytesConstructorOptions}  */
        const _options = {};
        _options.allowHalfOpen = options.allowHalfOpen;
        _options.readableHighWaterMark = options.readableHighWaterMark;
        _options.writableHighWaterMark = options.writableHighWaterMark;
        _options.writableCorked = options.writableCorked;
        _options.before = options.before;
        _options.after = options.after;

        /** @type {_BufferToBytes}  */
        const _it = {};

        /** @type {BufferToBytes}  */
        // @ts-ignore
        const it = new stream.Transform({
            allowHalfOpen: _options.allowHalfOpen,
            writableObjectMode: true,
            readableObjectMode: false,
            readableHighWaterMark: _options.readableHighWaterMark,
            writableHighWaterMark: _options.writableHighWaterMark,
            writableCorked: _options.writableCorked,
            transform: async (chunk, encoding, callback) => {
                if (_options.before != null) {
                    const result = await _options.before(chunk);
                    if (result != null) {
                        if (result.push) {
                            it.push(result.bytes);
                        }
                    }
                }
                it.push(chunk);
                if (_options.after != null) {
                    const result = await _options.after(chunk);
                    if (result != null) {
                        if (result.push) {
                            it.push(result.bytes);
                        }
                    }
                }
                callback();
            }
        });
        it.BufferToBytesConstructorOptions = () => {
            return _options;
        };
        it._BufferToBytes = () => {
            return _it;
        };
        return it;

    };
    return { BufferToBytes };

})();

module.exports = { BufferToBytes };
