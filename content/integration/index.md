---
title: "Integration"
type: homepage
---

## Quick Integration
{{< note title="Note">}}
We have recently launched our new [Fluid Player Builder](../builder). 
Use the Builder to customise your player for the easiest integration yet!
{{< /note >}}

In order to set Fluid Player, three things are required:

* The Javascript and CSS files of the player;
* An HTML5 `<video>` tag;
* A single Javascript line of code that attaches the player to the video tag.

```html
<html>
   <head>
      <title>Fluid Player</title>
      <link rel="stylesheet" href="http://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
      <script src="http://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>
   </head>
   <body>
      <video id='my-video'>
         <source src='vid.mp4' type='video/mp4' />
      </video>
      
      <script type="text/javascript">
         fluidPlayer('my-video');
      </script>
   </body>
</html>
```

The `fluidPlayer()` function gets the video tag id as a first parameter, which is required.


### Syntax

```javascript
fluidPlayer(idVideoPlayer[, options]);
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

<img src="screenshots/qualitySwitch.png" style="width:600px;margin:auto;display:flex;">

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
<img src="screenshots/hdSource.png" style="width:600px;margin:auto;display:flex;">

## Integration Using Optional Parameters

Fluid Player can be customized by setting some optional parameters. 
The full list of parameters can be found under [Configuration](../configuration)

```html
<link rel="stylesheet" href="http://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="http://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>

<video id='my-video' controls style="width: 640px; height: 360px;">
    <source src='vid.mp4' type='video/mp4' />
</video>

<script type="text/javascript">
fluidPlayer(
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