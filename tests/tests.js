var path = require('path');
var truely = require('sass-true');

var sassFile = path.join(__dirname, 'tests.scss');
truely.runSass({file: sassFile}, describe, it);
