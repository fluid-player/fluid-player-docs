---
title: "Streaming"
type: homepage
---


Streaming is multimedia that is constantly received by, and presented to, an end-user while being delivered by a provider.
Fluid Player supports MPEG-DASH and HLS streaming. These both work by splitting the content into segments. 
Segments contain video or audio content, and are selected based on the highest bit rate available. 
This is to ensure there are as few stalls and re-buffers as possible. More details on streaming can be found [here.](https://en.wikipedia.org/wiki/Streaming_media#Protocols)

## MPEG-DASH
Dynamic Adaptive Streaming over HTTP (DASH), also known as MPEG-DASH, is a streaming technique compatible with Fluid Player.
A media presentation description (MPD) file contains segmented information. The individual segments are described in [this article](https://www.brendanlong.com/the-structure-of-an-mpeg-dash-mpd.html).
Segments contain information regarding the times, URL, resolution, bit rates etc, which informs the player what to serve to the client depending on the bandwidth availability.
Full details on the MPEG-DASH protocol can be found on the [wikipedia](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP).


Fluid Player makes use of [Dash.js](https://github.com/Dash-Industry-Forum/dash.js) to play MPD files. 
Once an .mpd file is set as the source the Fluid Player will play it, as can be seen in the below example.


```html
<video id='dash-video'>
    <source src='stream_dash.mpd' type='application/dash+xml'/>
</video>

<script>
fluidPlayer(
    'dash-video',
    {
        layoutControls: {
            fillToContainer: true
        }
    }
);
</script>
```

<br/>
<video id='dash-video' controls style="width:720px;height:405px;">
    <source src='stream_dash.mpd' type='application/dash+xml' title="720p" />
</video>


## HLS
HTTP Live Streaming (also known as HLS) is an HTTP-based media streaming communications protocol implemented by Apple Inc. as part of its QuickTime, Safari, OS X, and iOS software.
This definition taken from the [HLS wikipedia page](https://en.wikipedia.org/wiki/HTTP_Live_Streaming). 
It works in a similar way to DASH by breaking the content into chunks and serving it one segment at a time, potentially with no final chunk.


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

<br/>
<video id='hls-video'>
    <source src='http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8' type='application/x-mpegURL'/>
</video>

<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>
<script src="streaming.js"></script>