path = require "path"

folderMount = (connect, point) ->
    return connect.static path.resolve(point)

module.exports = (grunt) ->

    port = 7788
  
    grunt.initConfig
        connect:
            server:
                options:
                    port: port
                    base: '.'
                    middleware: (connect, options) ->
                        return [
                            folderMount(connect, options.base)
                        ]
                    keepalive: true

    grunt.loadNpmTasks "grunt-contrib-connect"

    grunt.registerTask "default", ["connect:server"]