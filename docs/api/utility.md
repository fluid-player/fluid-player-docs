---
title: Utility API
sidebar_label: Utility API
---

You can use functions documented here to alter the behaviour of Fluid Player after initialisation
as well as to access different features and internals of Fluid Player itself.

## setHtmlOnPauseBlock
If we wanted to set or change the HTML that's set for this we can do it using the following.

**html**: This is HTML we want to show when the player in paused

**width**: The width (in pixels) of the container for this HTML

**height**: The height (in pixels) of the container for this HTML

```javascript
player.setHtmlOnPauseBlock({html: "<i>This video is paused</i>", width: 100, height: 50});
```

## destroy
Destroy this instance of Fluid Player. Use this method to remove Fluid Player instance from the page.

```javascript
player.destroy();
```

## dashInstance

Access the current instance of [DASH.js](https://github.com/Dash-Industry-Forum/dash.js).
Returns `null` if DASH streamer is not in use.

**NOTE:** avoid storing object reference returned by this function. It is possible for
this object to change during lifecycle of the Fluid Player instance.

```javascript
player.dashInstance();
```

## hlsInstance

Access the current instance of [HLS.js](https://github.com/video-dev/hls.js/).
Returns `null` if HLS streamer is not in use.  

**NOTE:** avoid storing object reference returned by this function. It is possible for
this object to change during lifecycle of the Fluid Player instance.

```javascript
player.hlsInstance();
```
