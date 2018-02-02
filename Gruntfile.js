(function () {
  'use strict'
}())

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // convert SCSS to CSS
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'auto'
        },
        files: {
          'src/css/style-tmp.css': 'src/scss/style.scss' // copying to tmp file that will be compiled to dist after postcss
        }
      }
    },
    // autoprefix CSS file to final destination
    postcss: {
      options: {
        processors: [
          require('autoprefixer')(),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/css/style-tmp.css'
        }
      }
    },
    // optimize and compress images
    imagemin : {
      options: {
        optimizationLevel: 4
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/img'
        }]
      }
    },
    // compress javascript files
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/js/scripts.min.js': 'src/js/script.js'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'postcss']
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch');

  // run `grunt` to convert SCSS to CSS, autoprefix CSS, compress .js files and
  // watch to run the tasks after files are saved
  grunt.registerTask('default', ['watch'])

  // i want to keep image opimization separate from the other build processes
  // run `grunt img` to optimize images
  grunt.registerTask('img', ['imagemin'])
}
