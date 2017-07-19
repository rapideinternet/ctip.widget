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
```

2. Include leaflet css:

	```html
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.1.0/dist/leaflet.css" integrity="sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw==" crossorigin=""/>
	```

3. Include plugin's code:

	```html
	<script src="dist/jquery.boilerplate.min.js"></script>
	```

4. Call the plugin:

	```javascript
	$("#element").ctipWidget({
		mapSelector: "#map",
		layersSelector: "#layers",
		layerTemplateSelector: "#layer-template"
	});
	```

5. Top update the dist folder, simply run 'grunt' or 'grunt watch'

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.ctip.widget.js
│   └── jquery.ctip.widget.min.js
├── src/
│   └── jquery.ctip.widget.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```
