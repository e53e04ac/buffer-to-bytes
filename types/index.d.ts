/*!
 * buffer-to-bytes/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type BufferToBytesConstructorOptions = {
    allowHalfOpen?: boolean
    readableHighWaterMark?: number;
    writableHighWaterMark?: number;
    writableCorked?: number;
    before?: {
        (buffer: Buffer): Promise<undefined | null | { bytes: Buffer; push: boolean; }>;
    };
    after?: {
        (buffer: Buffer): Promise<undefined | null | { bytes: Buffer; push: boolean; }>;
    };
};

type _BufferToBytes = {

};

type BufferToBytes = stream.Transform & {
    BufferToBytesConstructorOptions: {
        (): BufferToBytesConstructorOptions;
    };
    _BufferToBytes: {
        (): _BufferToBytes;
    };
};

type BufferToBytesConstructor = {
    (options: BufferToBytesConstructorOptions): BufferToBytes;
};

export const BufferToBytes: BufferToBytesConstructor;
