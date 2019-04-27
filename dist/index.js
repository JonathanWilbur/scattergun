"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var url_1 = require("url");
var USAGE = "\nscattergun {url} -o [urls...] -t [urls...]\n";
console.log(process.argv);
if (process.argv.length <= 1) {
    console.log(process.argv);
    console.log(USAGE);
    process.exit(0);
}
var configurationLocation = "~";
var configurationFile = ".scattergun.json";
var configurationPath = path.join(configurationLocation, configurationFile);
var inputURI = new url_1.URL(process.argv[1]);
var pluginsDirectory = path.join(__dirname, "plugins");
var inputPluginsDirectory = path.join(pluginsDirectory, "input");
var inputPluginFile = path.join(inputPluginsDirectory, inputURI.protocol + ".js");
var outputPluginsDirectory = path.join(pluginsDirectory, "output");
var processingPluginsDirectory = path.join(pluginsDirectory, "processing");
var inputPluginNames = fs.readdirSync(inputPluginsDirectory);
var outputPluginNames = fs.readdirSync(outputPluginsDirectory);
var processingPluginNames = fs.readdirSync(processingPluginsDirectory);
// If no subsequent argumentsRead from ~/.scattergun.json
if (process.argv.length === 2) {
    if (fs.existsSync(configurationPath)) {
        var data = void 0;
        try {
            data = fs.readFileSync(configurationPath, { encoding: "utf8" });
            var config = JSON.parse(data);
        }
        catch (e) {
            console.log("Error reading file.");
        }
    }
    else {
        // Alert
    }
}
else { // Expect the arguments to come from the command line.
    var inputURI_1 = process.argv[2];
}
var inputPlugins = inputPluginNames.map(function (name) {
    console.log("Loading input plugin " + name);
    return require(path.join(inputPluginsDirectory, name)).plugin;
});
// inputPlugins.forEach((ip : InputPlugin) : void => {
//     ip.read("file:///Users/jwilbur/Desktop/hey.txt");
// });
