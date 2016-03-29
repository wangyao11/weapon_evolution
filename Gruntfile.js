/**
 * Created by yuxin on 16/3/29.
 */
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //压缩js文件
            build: {
                files:[{
                    expand : true,
                    cwd    : "js",
                    src    : "**/*.js",
                    dest   : "dest/js"
                }]
            }
        }
    });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认任务
    grunt.registerTask('default', ['uglify']);
}