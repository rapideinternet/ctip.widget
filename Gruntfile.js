module.exports = function (grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
            " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
            " *  <%= pkg.description %>\n" +
            " *  <%= pkg.homepage %>\n" +
            " *\n" +
            " *  Made by <%= pkg.author.name %>\n" +
            " *  Under <%= pkg.license %> License\n" +
            " */\n"
        },

        // Concat definitions
        concat: {
            options: {
                banner: "<%= meta.banner %>"
            },
            dist: {
                files: {
                    "dist/jquery.ctip.widget.js": [
                        "bower_components/leaflet/dist/leaflet.js",
                        "bower_components/jquery/dist/jquery.js",
                        "src/mapbox-gl.js",
                        "src/leaflet-mapbox-gl.js",
                        "src/leaflet-search.min.js",
                        "src/L.Control.Locate.min.js",
                        "src/jquery.ctip.widget.js"// load after dependencies
                    ],
                    'dist/jquery.ctip.widget.css': ['src/L.Control.Locate.min.css', 'src/jquery.ctip.widget.css'],
                }
            }
        },
        cssmin: {
            dist: {
                src: ['dist/jquery.ctip.widget.css'],
                dest: 'dist/jquery.ctip.widget.min.css'
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/jquery.ctip.widget.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        jscs: {
            src: "src/**/*.js",
            options: {
                config: ".jscsrc"
            }
        },

        // Minify definitions
        uglify: {
            dist: {
                src: ["dist/jquery.ctip.widget.js"],
                dest: "dist/jquery.ctip.widget.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ["src/*"],
            tasks: ["default"]
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("travis", ["jshint"]);
    grunt.registerTask("lint", ["jshint", "jscs"]);
    grunt.registerTask("build", ["concat", "cssmin", "uglify"]);
    grunt.registerTask("default", ["jshint", "build"]);
};
