---
date: 2016-08-10T15:00:00+00:00
title: "Fluid Player"
type: homepage
weight: 0
---

## What is Fluid Player
Fluid Player is a free HTML5 video player. It is lightweight, easy to integrate and has advanced VAST capabilities.

<br/>

<video id='my-video' controls style="width:720px;height:405px;">
    <source src='https://cdn.fluidplayer.com/videos/valerian-1080p.mkv' title="1080p" type='video/mp4' />
    <source src='https://cdn.fluidplayer.com/videos/valerian-720p.mkv' title="720p" type='video/mp4' />
    <source src='https://cdn.fluidplayer.com/videos/valerian-480p.mkv' title="480p" type='video/mp4' />
</video>

<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"/></script>
<script src="fluidplayer/fp_generator.js"></script>

## Quick Setup

```html
<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>

<video id="video-id">
    <source src="video.mp4" type="video/mp4"/>
</video>

<script>
    fluidPlayer("video-id");
</script>
```

## Features
* Supports the VAST standard
  * Multiple VAST tags (pre-roll, mid-roll, post-roll)
  * Linear (video) ads
  * Non linear VAST tags (banner images (gif/jpg/png))
  * VAST Wrappers
* Comes with its own design, which is easily customizable. Ability to use the browser default layout
* Timeline Preview
* Lightweight
* Responsive
* Compatible with modern web browsers
* Ability to have more than 1 player per page
* Keyboard Shortcuts by key
* Allows adding multiple video sources for user to switch between different video quality
* Autoplay control
* Allows adding a custom logo
* Custom call to action text when playing a video ad
* Wordpress Plugin
* Scripts and resources available via CDN

## What is VAST
The IAB Digital Video Ad Serving Template (VAST) specification is a universal XML schema for serving ads to digital video players, and describes expected video player behavior when executing VAST-formatted ad responses.

In short, VAST makes it possible for an ad provider to serve ads to various video players using a universal way of communication which all these players understand.

A thorough description of the overall idea behind VAST, as well as the full VAST specification, can be found here: [VAST 4.0](https://www.iab.com/wp-content/uploads/2016/04/VAST4.0_Updated_April_2016.pdf).

## Fluid Player CDN

The Fluid Player code is found at https://github.com/fluid-player/ but is also available for direct linking at http://cdn.fluidplayer.com/ 

Automatically use the most recent version (recommended):
```html
http://cdn.fluidplayer.com/v2/current/fluidplayer.min.js
http://cdn.fluidplayer.com/v2/current/fluidplayer.min.css
```

Or specify the version:
```html
http://cdn.fluidplayer.com/1.0.1/fluidplayer.min.js
http://cdn.fluidplayer.com/1.0.1/fluidplayer.min.css
```

## License

Fluid Player is licensed under the MIT License. View the [License File](https://github.com/fluid-player/fluid-player/blob/master/LICENSE).
