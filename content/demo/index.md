---
title: "Demo"
type: homepage
---
## Default Layout

* Supports VAST (Video Ad Serving Template).
* Comes with its own design, which is easily customizable.
* Timeline Preview.
* Lightweight.
* Compatible with modern web browsers.
<br/><br/>

<video id='my-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

## Custom Themed Layout
* Easily customised with our [primaryColor](../configuration#primaryColor) configuration.
<br/><br/>

<video id='colour-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

## Multiple VAST and NonLinear Ad

* Ability to have more than 1 VAST (example: pre-roll and mid-roll).
* Ability to show non Linear (Banner) ads.
<br/><br/>

<video id='vast-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

## Autoplay with Mute enabled

* Video playing when user lands
* Sound muted by default
<br/><br/>

<video id='autoplay-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

## Download

* Allow the video to be downloaded easily by setting [allowDownload](../configuration#allowDownload) to _true_
<br/><br/>

<video id='download-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

## Playback Rate

* Adjustable video speed
* Easily set by enabling [playbackRateEnabled](../configuration#playbackRateEnabled)
<br/><br/>

<video id='playback-video' controls style="width:720px;height:405px;">
    <source src='video.mp4' type='video/mp4' title="720p" />
    <source src='video360.mp4' type='video/mp4' title="360p" />
</video>

<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>
<script src="fp_generator.js"></script>