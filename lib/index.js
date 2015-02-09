var getCardinalProcessor = require("./cardinal-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPlugincardinal(options) {
    this.options = options;
};

LessPlugincardinal.prototype = {
    install: function(less, pluginManager) {
        var CardinalProcessor = getCardinalProcessor();
        pluginManager.addPreProcessor(new CardinalProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPlugincardinal;

