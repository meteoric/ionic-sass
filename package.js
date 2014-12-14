Package.describe({
  name: 'meteoric:ionic-sass',
  summary: "Ionic's CSS Framework in SASS and bundled for Meteor.",
  version: '0.1.0',
  git: 'https://github.com/meteoric/ionic-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('stevezhu:sass@1.3.2');
  api.addFiles('sass_include_paths.json', 'server');
});
