# CTIP Widet

### Intro

Lorem ipsum

## Usage

1. Install dependencies

```bash
# npm install (make node_modules)
# npm install grunt (install grunt)
# npm install -g bower (install bower)
# bower install (install js dependencies)

1. Include leaflet css:

	```html
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" integrity="sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw==" crossorigin=""/>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.boilerplate.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").ctipWidget({
		mapSelector: "#map",
		layersSelector: "#layers",
		layerTemplateSelector: "#layer-template"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.boilerplate.js
│   └── jquery.boilerplate.min.js
├── src/
│   ├── jquery.boilerplate.coffee
│   └── jquery.boilerplate.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```
