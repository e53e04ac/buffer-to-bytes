/*!
 * buffer-to-bytes/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { BufferToBytes } = require('../');

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(Buffer.from([1]));
                input.push(Buffer.from([2]));
                input.push(null);
            }
        });

        const bufferToBytes = BufferToBytes({
            before: async (buffer) => {
                return { bytes: Buffer.from([0]), push: true };
            },
            after: async (buffer) => {
                return { bytes: Buffer.from([0]), push: true };
            },
        });
        bufferToBytes.BufferToBytesConstructorOptions();
        bufferToBytes._BufferToBytes();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bufferToBytes,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(Buffer.from([1]));
                input.push(Buffer.from([2]));
                input.push(null);
            }
        });

        const bufferToBytes = BufferToBytes({
            before: async (buffer) => {
                return { bytes: Buffer.from([0]), push: false };
            },
            after: async (buffer) => {
                return { bytes: Buffer.from([0]), push: false };
            },
        });
        bufferToBytes.BufferToBytesConstructorOptions();
        bufferToBytes._BufferToBytes();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bufferToBytes,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(Buffer.from([1]));
                input.push(Buffer.from([2]));
                input.push(null);
            }
        });

        const bufferToBytes = BufferToBytes({
            before: async (buffer) => {
                return null;
            },
            after: async (buffer) => {
                return null;
            },
        });
        bufferToBytes.BufferToBytesConstructorOptions();
        bufferToBytes._BufferToBytes();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bufferToBytes,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: true,
            read: (size) => {
                input.push(Buffer.from([1]));
                input.push(Buffer.from([2]));
                input.push(null);
            }
        });

        const bufferToBytes = BufferToBytes({});
        bufferToBytes.BufferToBytesConstructorOptions();
        bufferToBytes._BufferToBytes();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bufferToBytes,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

});
