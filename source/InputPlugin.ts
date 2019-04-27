import { Blob } from "./Blob";

export
interface InputPlugin {
    read (uri : URL) : Blob;
}