---
title: Quick setup
sidebar_label: Quick setup
---

## Integration using NPM

You can add Fluid Player to your NPM project using following commands. Execute them in the root
of your software project (where `package.json` can be found).

### Using NPM CLI

```shell
npm install fluid-player@^3.0.0
```

### Using Yarn

```shell
yarn add fluid-player@^3.0.0
```

### Using the Fluid Player module and importing CSS

To import Fluid player JavaScript module, place this code wherever you want Fluid Player
to be accessible in code.

#### JavaScript

```javascript
import fluidPlayer from 'fluid-player';
```

#### CSS

Depending on what kind of bundling mechanism used you will need to import CSS from NPM package
to have player instances styled properly. 

Refer to the documentation of your bundler to see how to add CSS to your stylesheets.

An example how the import might look like for Webpack projects using `~` as `node_modules` import prefix.
```css
@import "~fluid-player/src/css/fluidplayer.css";
```

## Integration using CDN

The Fluid Player provides a CDN build available for direct linking from http://cdn.fluidplayer.com.

**IMPORTANT:** As of v3.0.0, CDN version of Fluid Player ships with embedded CSS. Separate tag to
include CSS is no longer required.

Automatically use the most recent version (recommended):

```html
<script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>
```

Or specify the version:

```html
<script src="https://cdn.fluidplayer.com/3.0.0/fluidplayer.min.js"></script>
```

#### CDN integration example

```html
<!-- Define a video with sources to attach Fluid Player to -->
<video id="example-player">
    <source src="video.mp4" type="video/mp4"/>
</video>

<!-- Place before </body> tag -->
<script src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"></script>
<script>
    var player = fluidPlayer('example-player');
</script>
```

## Initializer syntax

```javascript
var player = fluidPlayer(idVideoPlayer[, options]);
```

## Quality Switching

Multiple sources can be added as shown below. 
The title will be displayed to the user when switching sources, and should be set to the video quality as can be seen below ('1080p', '720p' etc).

```html
<video id='my-video' controls style="width: 640px; height: 360px;">
    <source src='vid_1080p.mp4' title='1080p' type='video/mp4' />
    <source src='vid_720p.mp4' title='720p' type='video/mp4' />
    <source src='vid_480p.mp4' title='480p' type='video/mp4' />
</video>
```

![](/img/docs/integration/qualitySwitch.png)

## Define Source as HD
The sources set for [quality switching](#quality-switching) can be defined as HD by adding a **data-fluid-hd** attribute to the **<source>** tag.
The colour of this text will match the [primary color](../layout_configuration#primarycolor). If you wish to override this colour you can do so using custom CSS on your own page. 
The class responsible for the colour is __fp_hd_source__. An example of overriding this colour is shown below.
```css 
.fp_hd_source { color: yellow !important; }
```

An example of how the HD is set in the sources is show below.
```html
<video id='my-video' controls style="width: 640px; height: 360px;">
    <source data-fluid-hd src='vid_1080p.mp4' title='1080p' type='video/mp4' />
    <source data-fluid-hd src='vid_720p.mp4' title='720p' type='video/mp4' />
    <source src='vid_480p.mp4' title='480p' type='video/mp4' />
</video>
```
![](/img/docs/integration/hdSource.png)

## Setting additional options

Fluid Player can be customized by setting some optional parameters. 
The full list of parameters can be found under [Configuration](../configuration)

```html
<video id='my-video' controls style="width: 640px; height: 360px;">
    <source src='vid.mp4' type='video/mp4' />
</video>

<script type="text/javascript">
var player = fluidPlayer(
   'my-video',
    {
        layoutControls: {
            // Parameters to customise the look and feel of the player
        },
        vastOptions: {
            // Parameters to customise how the ads are displayed & behave
        }
    }
);
</script>
```
