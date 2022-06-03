---
title: Controls API
sidebar_label: Controls API
---

You can use functions documented here to manage user controls of Fluid Player after initialisation.

## Play
To play the Fluid Player use the **play()** function on our _player_ object

```javascript
player.play();
```

## Pause
To play the Fluid Player use the **pause()** function on our _player_ object

```javascript
player.pause();
```

## SkipTo
The **skipTo(seconds)** function takes in a parameter of the time (in seconds) to move the video to. In our below example we'll skip to 30 seconds into the video.
 
```javascript
player.skipTo(30);
```

## SetPlaybackSpeed
The **setPlaybackSpeed(speed)** function takes in a speed parameter. The default speed is **1**, and the speeds are relative to this.
If we wanted to double the speed we'd use **2**, and half speed would be **0.5**. The below example will double the speed of the video.
 
```javascript
player.setPlaybackSpeed(2);
```

## SetVolume
The **setVolume(volume)** function takes in a volume parameter. The max volume is **1**, and the volumes to set are relative to this.
To half the volume we would use **setVolume(0.5)**, and to mute the player we would use **setVolume(0)**. 
The below example will mute the video.
 
```javascript
player.setVolume(0);
```

## toggleControlBar
We can show and hide the control bar when necessary. This function takes in a **true** or **false** value.

If we pass **true** the control bar will show and remain showing at all times.

if we pass **false** we hide the control bar and it returns to it's standard behaviour, showing on hover or pause.

```javascript
player.toggleControlBar(true);
```

## toggleFullScreen
Using **toggleFullScreen(boolean)** we can set the video to fullscreen. **true** will set the player to fullscreen, and **false** will set the player back to normal.

```javascript
player.toggleFullScreen(true);
```

