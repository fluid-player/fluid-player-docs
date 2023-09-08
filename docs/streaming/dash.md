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
# Customizing MPEG-DASH

Fluid Player has hooks that support `dashjs` configuration, a full list of configurable properties can be found in the [official `dashjs` API docs](http://cdn.dashjs.org/latest/jsdoc/index.html).
Below is an example of a configuration where you can set the maximum buffer length and streaming quality with which the video will be started.

```javascript
fluidPlayer('fluid-player', {
    modules: {
        configureDash: (options) => {
            return {
                stableBufferTime: 30, // Max length of buffered video in seconds
                initialBufferLevel: 4, // Starting quality level
                ...options,
            }
        },
        onBeforeInitDash: (dash) => {
            dash.setQualityFor('video', 4); // Programatically set quality level for next segment
        },
        onAfterInitDash: (dash) => {
            dash.setQualityFor('video', 4); // Programatically set quality level for next segment
        },
    }
});
```

For more information on using hooks see the [Advanced configuration](/docs/configuration/advanced/) page.
