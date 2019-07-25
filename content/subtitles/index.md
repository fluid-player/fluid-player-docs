---
title: "Subtitles"
type: homepage
---


Subtitles are text derived from either a transcript or screenplay of the dialog or commentary in films, television programs, video games, and the like, usually displayed at the bottom of the screen. Below is an example video showing the subtitles.
## Example
<video id='subtitles-video' controls style="width:720px;height:405px;">
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
    <track label="English" kind="metadata" srclang="en"
           src="subtitles/english.vtt" default>
    <track label="Deutsch" kind="metadata" srclang="de"
           src="subtitles/deutsch.vtt">
</video>

<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>
<script src='fluid_subtitles.js'></script>

## VTT format
```text
WEBVTT

1
00:00:15.000 --> 00:00:18.000 align:start
<v Proog>At the left we can see...</v>

2
00:00:18.167 --> 00:00:20.083 align:middle
<v Proog>At the right we can see the...</v>

3
00:00:20.083 --> 00:00:22.000
<v Proog>...the <c.highlight>head-snarlers</c></v>

4
00:00:22.000 --> 00:00:24.417 align:end
<v Proog>Everything is safe. Perfectly safe.</v>

5
00:00:24.583 --> 00:00:27.083
<v Proog>Emo?</v>
```

## Adding to Fluid Player
To configure Fluid Player to use your VTT file, you can set is as the optional parameter **subtitlesEnabled** under **layoutControls**.

Provide subtitles url in track tags under **kind='metadata'**

Please make sure that you **do not specify as** kind='subtitles', because that doesn't work in some browsers.
```javascript

<video id="my-video" controls >
    <source src="video.mp4" type="video/mp4"/>
    <track label="English" kind="metadata" srclang="en"
           src="english.vtt" default>
    <track label="Deutsch" kind="metadata" srclang="de"
           src="deutsch.vtt">
</video>

fluidPlayer(
    'my-video',
    {
        layoutControls: {
            subtitlesEnabled: true
        }
    }
);
```