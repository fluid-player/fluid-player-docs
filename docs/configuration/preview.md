---
title: Previews
sidebar_label: Previews
---

## Adding Preview Thumbnails

Preview thumbnails can be added to the Fluid Player video, to show when the progress bar is hovered over. 
When these are added they will replace the time that normally shows. 
This is a common feature that allows users to easily navigate around through the video.
Below is an example video showing the thumbnails.

<div class="docs-player" data-instance="previews"></div>

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
Provided the file is correct, the below code will set the thumbnail previews.
The sprite image paths (thumbnails.jpg) are relative to root url in the VTT file.

```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbnails.vtt',
                // spriteRelativePath: true, //Default false
                // sprite: 'thumbnails.jpg',
                type: 'VTT'
            }
        }
    }
);
```

You can make the sprite paths relative to the VTT file with the `spriteRelativePath` setting.
In this case the `thumbnails.jpg#xywh=480,0,120,68` image path will be relative to `thumbs/` as a result  `thumbs/thumbnails.jpg`

```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbs/thumbnails.vtt',
                spriteRelativePath: true,
                type: 'VTT'
            }
        }
    }
);
```

Optionally if the thumbnails image is not defined in thumbnails.vtt or want to overwrite than you may set `sprite` property.
Please note, in this case the spriteRelativePath won't have any affect.
```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbnails/thumbnails.vtt',
                sprite: 'thumbnails/thumbnails.jpg',
                type: 'VTT'
            }
        }
    }
);
```

## static Format
If the WebVTT format doesn't suit you, the thumbnails can be defined statically.

### Example static configuration
The `startTime` and `endTime` properties are defined in seconds:

```javascript
fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                type: 'static',
                frames: [
                   {
                        startTime: 0,
                        endTime: 0.5,
                        image: '/thumbnails/thumbnails.jpg',
                        x: 0,
                        y: 0,
                        w: 200,
                        h: 84
                    },
                    ...
                ]
            }
        }
    }
);
```
