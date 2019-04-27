import * as fs from "fs";
import * as path from "path";
import * as yargs from "yargs";
import { URL } from "url";
import { InputPlugin } from "./InputPlugin";

const argv : object = yargs
.option("pipeline", {
    alias: "P",
    default: []
})
.option("processing", {
    alias: "p",
    default: []
})
.option("outputs", {
    alias: "o",
    default: []
})
.option("log-level", {
    alias: "l",
    default: ""
}).argv;

const USAGE : string =
`
scattergun {url} -o [urls...] -t [urls...]
`;

// argv[0] = node
// argv[1] = index.js
// argv[2] = input URI
if (process.argv.length <= 1) { // I don't even know how this would be possible.
    console.log(USAGE);
    process.exit(0);
}

const configurationLocation : string = "~";
const configurationFile : string = ".scattergun.json";
const configurationPath : string = path.join(configurationLocation, configurationFile);

if (process.argv.length > 3) {
    // Ignore the scattergun file entirely.

}

// node ./index.js
if (process.argv.length === 2) {
    // Only read the scattergun configuration file.
}
// It should be: node ./index.js {input uri}
else if (process.argv.length === 3) {
    // Read the scattergun configuration file, but ignore inputs.
}

const inputURI : URL = new URL(process.argv[2]);
const pluginsDirectory : string = path.join(__dirname, "plugins");
const inputPluginsDirectory : string = path.join(pluginsDirectory, "input");
const inputPluginFile : string = path.join(inputPluginsDirectory, `${inputURI.protocol}.js`);

const outputPluginsDirectory : string = path.join(pluginsDirectory, "output");
const processingPluginsDirectory : string = path.join(pluginsDirectory, "processing");

const inputPluginNames : string[] = fs.readdirSync(inputPluginsDirectory);
const outputPluginNames : string[] = fs.readdirSync(outputPluginsDirectory);
const processingPluginNames : string[] = fs.readdirSync(processingPluginsDirectory);

// If no subsequent argumentsRead from ~/.scattergun.json
if (process.argv.length === 2) {
    if (fs.existsSync(configurationPath)) {
        let data : string;
        try {
            data = fs.readFileSync(configurationPath, { encoding: "utf8" });
            const config = JSON.parse(data);
        } catch (e) {
            console.log("Error reading file.");
        }
    } else {
        // Alert
    }
} else { // Expect the arguments to come from the command line.
    const inputURI : string = process.argv[2];
}


const inputPlugins : InputPlugin[] =
    inputPluginNames.map((name : string) : InputPlugin => {
        console.log("Loading input plugin " + name);
        return require(path.join(inputPluginsDirectory, name)).plugin;
    });

// inputPlugins.forEach((ip : InputPlugin) : void => {
//     ip.read("file:///Users/jwilbur/Desktop/hey.txt");
// });