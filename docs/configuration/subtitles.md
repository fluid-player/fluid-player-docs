---
title: Subtitles
sidebar_label: Subtitles
---

Subtitles are text derived from either a transcript or screenplay of the dialog or commentary in films, television programs, video games, and the like, usually displayed at the bottom of the screen. Below is an example video showing the subtitles.

<div class="docs-player" data-instance="subtitles"></div>

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

```html
<video id="my-video" controls>
    <source src="video.mp4" type="video/mp4"/>
    <track label="English" kind="metadata" srclang="en" src="/subtitles/english.vtt" default>
    <track label="Deutsch" kind="metadata" srclang="de" src="/subtitles/deutsch.vtt">
</video>

<script type="application/javascript">
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            subtitlesEnabled: true
        }
    }
);
</script>
```

## subtitlesOnByDefault
Set this parameter to **true** to have subtitles on by default. This parameter is by default already set to **true**.
```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            subtitlesOnByDefault: false, // Default true
        }
    }
);
```
