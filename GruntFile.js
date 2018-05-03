module.exports = function(grunt) {
        // grunt configuration details   
    grunt.initConfig({
        jshint: { // syntax checking
            files: ["*.js", "test/*.js", "lib/**/*.js"], // add everything (that _you_ write) here 
            options: {
                esnext: true,
                globals: { // to keep it from complaining about jquery
                    jQuery: true
                }   
            }   
        },  
        // each key is a task
        browserify: {
            client: {
                src: ["app-client.js"],
                dest: "public/js/bundle.js"
            }   
        }   
    }); 
    grunt.loadNpmTasks("grunt-contrib-jshint"); // to use jshint plugin
    grunt.loadNpmTasks("grunt-browserify");


    grunt.registerTask("js", ["browserify"]);
    grunt.registerTask("default", ["jshint", "js"]);
};
