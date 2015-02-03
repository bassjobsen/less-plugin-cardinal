var path = require('path');

module.exports = function() {
    function CardinalProcessor(options) {
       
    };

     CardinalProcessor.prototype = {
				process : function (src, extra) {
				var injected = '@import "' + path.resolve(__dirname, '../') + '/less/cardinal.less";\n';
				var ignored = extra.imports.contentsIgnoredChars;
				var fileInfo = extra.fileInfo;
				ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
				ignored[fileInfo.filename] += injected.length;
				return injected + src;
				}
    };

return CardinalProcessor;};
