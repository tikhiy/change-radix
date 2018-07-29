all: lint
	node_modules/.bin/browserify -o dist/index.js     index.js

min: all
	node_modules/.bin/uglifyjs   -o dist/index.min.js dist/index.js

lint:
	node_modules/.bin/jshint . --verbose

docs:
	node_modules/.bin/jsdoc . README.md -d docs
