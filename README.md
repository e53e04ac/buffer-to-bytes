# buffer-to-bytes

## Requirements

- Node.js (v15)

## Installation

~~~~~
npm install e53e04ac/buffer-to-bytes
~~~~~

## Example

~~~~~ js
const stream = require('stream');
const { BufferToBytes } = require('buffer-to-bytes');
(async () => {
    const stream1 = stream.Readable.from([
        Buffer.from('line1'),
        Buffer.from('line2')
    ]);
    const stream2 = BufferToBytes({
        before: async (buffer) => ({ bytes: Buffer.from('('), push: true }),
        after: async (buffer) => ({ bytes: Buffer.from(')\n'), push: true })
    });
    for await (const data of stream1.pipe(stream2)) {
        console.log(data);
    }
})();
~~~~~
