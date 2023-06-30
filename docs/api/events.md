---
title: Event API
sidebar_label: Event API
---

You can use events documented here to listen for state changes to Fluid Player
once it has been initialized.

You can bind to events as shown in the example bellow.

```javascript
var player = fluidPlayer('video-id');

player.on('play', function() {
  //... Your code here
});

player.on('pause', function() {
  //... Your code here
});
```

## play
The **on('play', function(){})** can be used to handle the play event for the Fluid Player.

```javascript
player.on('play', function(){ console.log('Video is playing'); });
```

## playing
The **on('playing', function(){})** can be used to handle the playing event for the Fluid Player.

```javascript
player.on('playing', function(){ console.log('Video is now playing'); });
```

## pause
The **on('pause', function(){})** can be used to handle the pause event for the Fluid Player.

```javascript
player.on('pause', function(){ console.log('Video is now paused'); });
```

## ended
The **on('ended', function(){})** can be used to handle the pause ended for the Fluid Player.

```javascript
player.on('ended', function(){ console.log('Video is now ended'); });
```

## seeked
The **on('seeked', function(){})** can be used to handle the pause seeked for the Fluid Player.

```javascript
player.on('seeked', function(){ console.log('Video is now seeked'); });
```

## theatreModeOn
The **on('theatreModeOn', function(){})** can be used to execute specific functionality when theatre mode is enabled.

```javascript
player.on('theatreModeOn', function(){ console.log('Theatre mode is enabled'); });
```

## theatreModeOff
The **on('theatreModeOff', function(){})** can be used to execute specific functionality when theatre mode is disabled.

```javascript
player.on('theatreModeOff', function(){ console.log('Theatre mode is disabled'); });
```

## timeupdate
Fluid Player emits timeupdate event when the time indicated by the currentTime 
attribute of the HTML5 player has been updated.
                                            
The event frequency is dependent on the system load, but will be thrown between about 4Hz and 66Hz (assuming the
event handlers don't take longer than 250ms to run).
 
This event receives 1 argument - current time position of the main video content.

```javascript
player.on('timeupdate', function(time){ console.log(time); });
```

## miniPlayerToggle

Triggers a `CustomEvent` when the Mini Player is toggled on or off. The `isToggledOn` property holds the new state of
the Mini Player.

```javascript
player.on('miniPlayerToggle', function (event) { console.log(event.detail.isToggledOn) });
```
