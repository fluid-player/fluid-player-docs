---
title: MPEG-DASH
sidebar_label: MPEG-DASH
---

Dynamic Adaptive Streaming over HTTP (DASH), also known as MPEG-DASH, is a streaming technique compatible with Fluid Player.
A media presentation description (MPD) file contains segmented information. The individual segments are described in [this article](https://www.brendanlong.com/the-structure-of-an-mpeg-dash-mpd.html).
Segments contain information regarding the times, URL, resolution, bit rates etc, which informs the player what to serve to the client depending on the bandwidth availability.
Full details on the MPEG-DASH protocol can be found on the [wikipedia](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP).

<div class="docs-player" data-instance="dash"></div>

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
