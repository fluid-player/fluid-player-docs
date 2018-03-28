---
title: "Preview Configuration"
type: homepage
---
## Adding Preview Thumbnails

Preview thumbnails can be added to the Fluid Player video, to show when the progress bar is hovered over. 
When these are added they will replace the time that normally shows. 
This is a common feature that allows users to easily navigate around through the video.
Below is an example video showing the thumbnails.

<br/>

<video id='my-video' controls style="width:720px;height:405px;">
    <source src='https://cdn.fluidplayer.com/current/docs/demo/video.mp4' title="1080p" type='video/mp4' />
</video>

<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"/></script>
<script src="thumbnail_player.js"></script>

## VTT Format
The format used is WebVTT, a HTML5 standard. Details in the WebVTT format can be found [here](https://w3c.github.io/webvtt/).
When used for thumbnails, VTT files contain links to the thumbnail images or the position of a single sprite image. 
These images can be in JPG, PNG or GIF format.
The image and times in which to point to that image are defined in the file, the contents of which should contain the following:

* The range the tooltip thumbnail represents. Note the range needs to be in (HH:)MM:SS.MMM format.
* The URL to the tooltip thumbnail for this range. The URL is relative to the VTT file (not to the page or player), much like images included in CSS sheets.

### Example VTT File - Separate Images
If the images are stored separately the .vtt file contents would look similar to what's shown below. 
Note that we see _thumbnail1.jpg_,_thumbnail2.jpg_ and _thumbnail3.jpg_

```text
WEBVTT

00:00:00.000 --> 00:00:05.000
thumbnail1.jpg

00:00:05.000 --> 00:00:10.000
thumbnail2.jpg

00:00:10.000 --> 00:00:15.000
thumbnail3.jpg
```

### Example VTT File - Sprite Image
Storing the images in the one file can save on space and complexity.
If the images are stored in the one image file, the contents of our .vtt would look similar to what's shown below. 
Note we only have a _thumbnails.jpg_ file. These are taken from what is used to show the thumbnails in the above Fluid Player example.

<img src="thumbnails.jpg" style="width:100%;margin:auto;display:flex;">

```text
WEBVTT

00:00:00.000 --> 00:00:02.000
thumbnails.jpg#xywh=0,0,120,68

00:00:02.000 --> 00:00:04.000
thumbnails.jpg#xywh=120,0,120,68

00:00:04.000 --> 00:00:06.000
thumbnails.jpg#xywh=240,0,120,68

00:00:06.000 --> 00:00:08.000
thumbnails.jpg#xywh=360,0,120,68

00:00:08.000 --> 00:00:10.000
thumbnails.jpg#xywh=480,0,120,68
```

## Adding to Fluid Player
To configure Fluid Player to use your VTT file, you can set is as the optional parameter **timelinePreview** under **layoutControls**. 
This is also outlined [here](http://localhost:1313/layout_configuration/#timelinepreview). 
Provided the file is correct, the below code will set the thumbnail previews.

```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbnails.vtt',
                type: 'VTT'
            }
        }
    }
);
```