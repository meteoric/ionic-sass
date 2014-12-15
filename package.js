Package.describe({
  name: 'meteoric:ionic-sass',
  summary: "Ionic's CSS Framework in SASS and bundled for Meteor.",
  version: '0.1.3',
  git: 'https://github.com/meteoric/ionic-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('stevezhu:sass@1.3.2');

  api.addFiles('sass_include_paths.json', 'server');

  api.addFiles([
    'ionic-sass/_action-sheet.scss',
    'ionic-sass/_animations.scss',
    'ionic-sass/_backdrop.scss',
    'ionic-sass/_badge.scss',
    'ionic-sass/_bar.scss',
    'ionic-sass/_button-bar.scss',
    'ionic-sass/_button.scss',
    'ionic-sass/_checkbox.scss',
    'ionic-sass/_form.scss',
    'ionic-sass/_grid.scss',
    'ionic-sass/_items.scss',
    'ionic-sass/_list.scss',
    'ionic-sass/_loading.scss',
    'ionic-sass/_menu.scss',
    'ionic-sass/_mixins.scss',
    'ionic-sass/_modal.scss',
    'ionic-sass/_platform.scss',
    'ionic-sass/_popover.scss',
    'ionic-sass/_popup.scss',
    'ionic-sass/_progress.scss',
    'ionic-sass/_radio.scss',
    'ionic-sass/_range.scss',
    'ionic-sass/_reset.scss',
    'ionic-sass/_scaffolding.scss',
    'ionic-sass/_select.scss',
    'ionic-sass/_slide-box.scss',
    'ionic-sass/_tabs.scss',
    'ionic-sass/_toggle.scss',
    'ionic-sass/_type.scss',
    'ionic-sass/_util.scss',
    'ionic-sass/_variables.scss'
  ], 'server');

  api.addFiles('_ionic.scss', 'server');
});
