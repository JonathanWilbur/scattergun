import * as fs from "fs";
import * as url from "url";
import { Blob } from "../../Blob";
import { InputPlugin } from "../../InputPlugin";

export
class FileInputPlugin implements InputPlugin {
    public read (uri : url.URL) : Blob {
        return {
            data: fs.createReadStream(url.fileURLToPath(uri)),
            uri: uri.toString()
        };
    }
}

export
const plugin : FileInputPlugin = new FileInputPlugin();