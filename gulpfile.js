var gulp = require('gulp');
var stealTools = require('steal-tools');

gulp.task('scripts',function(){
  stealTools.export({
    system: {
      config: "package.json!npm",
    },
    options: {
      verbose:true
    },
    outputs: {
      "+cjs": {},
      "+amd": {},
      "+global-js": {}
    }
  });
});

gulp.task('export',function(){
  stealTools.export({
    system: {
      config: "package.json!npm",
    },
    options: {
      sourceMaps: true,
      minify:true
    },
    outputs: {
      "+cjs": {},
      "+amd": {},
      "+global-js": {}
    }
  });
});

gulp.task('watch',function(){
  gulp.watch('src/js/**/*.js',['scripts']);
});

gulp.task('default',['scripts','watch']);
gulp.task('build',['export']);