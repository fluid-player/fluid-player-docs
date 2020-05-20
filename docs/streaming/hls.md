---
title: HTTP Live Streaming (HLS)
sidebar_label: HTTP Live Streaming (HLS)
---

HTTP Live Streaming (also known as HLS) is an HTTP-based media streaming communications protocol implemented by Apple Inc. as part of its QuickTime, Safari, OS X, and iOS software.
This definition taken from the [HLS wikipedia page](https://en.wikipedia.org/wiki/HTTP_Live_Streaming). 

It works similarly to DASH by breaking the content into chunks and serving it one segment at a time, potentially with no final chunk.

<div class="docs-player" data-instance="hls"></div>

Fluid Player makes use of [hls.js](https://github.com/video-dev/hls.js) to play .m3u8 files.
Once an .m3u8 file is set as the source the Fluid Player will play it, as can be seen in the below example.

```html
<video id='hls-video'>
    <source src='stream_hls.m3u8' type='application/x-mpegURL'/>
</video>

<script>
fluidPlayer(
    'hls-video',
    {
        layoutControls: {
            fillToContainer: true
        }
    }
);
</script>
```
