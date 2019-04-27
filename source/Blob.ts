import * as stream from "stream";

export
interface Blob {
    data : stream.Readable;
    uri : string;
    extraProperties? : object;
}