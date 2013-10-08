module.exports = function (grunt) {
    grunt.initConfig(
        {
            less: {
                development: {
                    files: {
                        'css/main.css': 'less/main.less'
                    }
                }
            }
        }
    );
    grunt.loadNpmTasks('grunt-contrib-less');
};