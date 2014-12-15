![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# ionic-sass

[Ionic's CSS Framework](http://ionicframework.com/docs/components/) in SASS and bundled for Meteor. Currently up to date with version `v1.0.0-beta.13`.

## Installation

```
meteor add stevezhu:sass
meteor add meteoric:ionic-sass
```

Then in your app's `.scss` file:

```
@import "ionic";
```

## Customization

Importing the source SASS files as opposed to including compiled or CDN versions allows you to easily customize or theme your app using SASS variables.

**_app-variables.scss**

```
// Change Ionic's `positive` color to Meteor's red color:
$positive: #DE4F4F;
```

**app.scss**

```
// Import your custom variables
@import 'app-variables';

// Then import ionic after. Ionic will use your variables instead of it's own.
@import "ionic";
```

## Icons

You may also want to install our [Ionicons](https://github.com/meteoric/ionicons-sass) package.

## Docs

See the official [Ionic CSS Docs](http://ionicframework.com/docs/components/) site for usage instructions.
