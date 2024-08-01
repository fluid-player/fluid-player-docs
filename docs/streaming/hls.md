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
For browsers that have native support for HLS, Fluid Player will not use `hls.js`.

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

If your browser natively supports HLS, Fluid Player will not utilize [hls.js](https://github.com/video-dev/hls.js). However, if you prefer to use hls.js despite native support, you can override it by enabling the following flag.

```html
<video id='hls-video'>
    <source src='stream_hls.m3u8' type='application/x-mpegURL'/>
</video>

<script>
fluidPlayer(
    'hls-video',
    {
        hls: {
            overrideNative: true
        }
    }
);
</script>
```


# HTTP Live Streaming with VAST

Fluid Player supports HTTP Live Streaming with VAST tags.
For `.m3u8` files to be played, the VAST `MediaFile` tag must have the following attributes:

* `delivery` should be set as `streaming`
* `type` should be set as `application/vnd.apple.mpegurl`

For example:

```xml
<MediaFile id="1" delivery="streaming" type="application/vnd.apple.mpegurl" width="480" height="640">
    <![CDATA[ https://example.com/stream_hls.m3u8 ]]>
</MediaFile>
```

# Customizing HLS

Fluid Player has hooks that support `hls.js` configuration, a full list of configurable properties can be found in the [official `hsl.js` API docs](https://github.com/video-dev/hls.js/blob/master/docs/API.md).
Below is an example of a configuration where you can set the maximum buffer length and streaming quality with which the video will be started.

```javascript
fluidPlayer('fluid-player', {
    modules: {
        configureHls: (options) => {
            return {
                maxMaxBufferLength: 30, // Max length of buffered video in seconds
                startLevel: 4, // Starting quality level - 4 is usually Full HD (1080p), but this can change by source
                ...options,
            }
        },
        onBeforeInitHls: (hls) => {
            hls.startLevel = 4; // Programatically set start quality level
        },
        onAfterInitHls: (hls) => {
            hls.nextLevel = 4 // Programatically set quality level for next segment
        },
    }
});
```

For more information on using hooks see the [Advanced configuration](/docs/configuration/advanced/) page.
