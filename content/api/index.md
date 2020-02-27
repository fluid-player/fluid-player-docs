---
title: "API"
type: homepage
---
## Introduction

This section hopes to outline the functions which can alter the behaviour of Fluid Player after initialisation. 
This can be done by calling functions after we have our Fluid Player object. 
For this example we will assume we've used the below Fluid Player configs.

```javascript
<script type="text/javascript">
    var myFluidPlayer = fluidPlayer(
        'my-video'
    );
</script>
``` 

## Play
To play the Fluid Player use the **play()** function on our _myFluidPlayer_ object

```javascript
myFluidPlayer.play();
```

## Pause
To play the Fluid Player use the **pause()** function on our _myFluidPlayer_ object

```javascript
myFluidPlayer.pause();
```

## SkipTo
The **skipTo(seconds)** function takes in a parameter of the time (in seconds) to move the video to. In our below example we'll skip to 30 seconds into the video.
 
```javascript
myFluidPlayer.skipTo(30);
```

## SetPlaybackSpeed
The **setPlaybackSpeed(speed)** function takes in a speed parameter. The default speed is **1**, and the speeds are relative to this.
If we wanted to double the speed we'd use **2**, and half speed would be **0.5**. The below example will double the speed of the video.
 
```javascript
myFluidPlayer.setPlaybackSpeed(2);
```

## SetVolume
The **setVolume(volume)** function takes in a volume parameter. The max volume is **1**, and the volumes to set are relative to this.
To half the volume we would use **setVolume(0.5)**, and to mute the player we would use **setVolume(0)**. 
The below example will mute the video.
 
```javascript
myFluidPlayer.setVolume(0);
```

## setHtmlOnPauseBlock
The purpose of the htmlOnPauseBlock is [outlined here](https://docs.fluidplayer.com/layout_configuration/#htmlonpauseblock). 
If we wanted to to set or change the HTML that's set for this we can do it using the following.

**html**: This is HTML we want to show when the player in paused

**width**: The width (in pixels) of the container for this HTML

**height**: The height (in pixels) of the container for this HTML

```javascript
myFluidPlayer.setHtmlOnPauseBlock({html: "<i>This video is paused</i>", width: 100, height: 50});
```
## toggleControlBar
We can show and hide the control bar when necessary. This function takes in a **true** or **false** value.

If we pass **true** the control bar will show and remain showing at all times.

if we pass **false** we hide the control bar and it returns to it's standard behaviour, showing on hover or pause.

```javascript
myFluidPlayer.toggleControlBar(true);
```

## toggleFullScreen
Using **toggleFullScreen(boolean)** we can set the video to fullscreen. **true** will set the player to fullscreen, and **false** will set the player back to normal.

```javascript
myFluidPlayer.toggleFullScreen(true);
```

## destroy
Destroy this instance of Fluid Player. Use this method to remove Fluid Player instance from the page.

```javascript
myFluidPlayer.destroy();
```

## on('play', function(){})
The **on('play', function(){})** can be used to handle the play event for the Fluid Player.

```javascript
myFluidPlayer.on('play', function(){ console.log('Video is playing'); });
```

## on('playing', function(){})
The **on('playing', function(){})** can be used to handle the playing event for the Fluid Player.

```javascript
myFluidPlayer.on('playing', function(){ console.log('Video is now playing'); });
```

## on('pause', function(){})
The **on('pause', function(){})** can be used to handle the pause event for the Fluid Player.

```javascript
myFluidPlayer.on('pause', function(){ console.log('Video is now paused'); });
```

## on('ended', function(){})
The **on('ended', function(){})** can be used to handle the pause ended for the Fluid Player.

```javascript
myFluidPlayer.on('ended', function(){ console.log('Video is now ended'); });
```

## on('seeked', function(){})
The **on('seeked', function(){})** can be used to handle the pause seeked for the Fluid Player.

```javascript
myFluidPlayer.on('seeked', function(){ console.log('Video is now seeked'); });
```

## on('theatreModeOn', function(){})
The **on('theatreModeOn', function(){})** can be used to execute specific functionality when theatre mode is enabled.

```javascript
myFluidPlayer.on('theatreModeOn', function(){ console.log('Theatre mode is enabled'); });
```

## on('theatreModeOff', function(){})
The **on('theatreModeOff', function(){})** can be used to execute specific functionality when theatre mode is disabled.

```javascript
myFluidPlayer.on('theatreModeOff', function(){ console.log('Theatre mode is disabled'); });
```
