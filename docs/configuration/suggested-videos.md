---
title: Suggested videos
sidebar_label: Suggested videos
---

At the end of the video, the player will show a grid of up to 12 videos (depending on the device), to entice the viewer to watch more videos and extend viewing sessions.

### Desktop
![](/img/docs/configuration/suggested-videos/desktop.png)

### Mobile
![](/img/docs/configuration/suggested-videos/mobile.png)

## Configuration

Configuring the Suggested Videos feature is easy. The main requirement is to provide a URL that returns a JSON file. This can be a static .json file or an API call that returns an array of 12 videos.

When using an API, query parameters can be utilized to pass data of the current video, such as tags, to create a more accurate and personalized grid of suggested videos.

```js
fluidPlayer(
  'my-video',
  {
    suggestedVideos: {
      configUrl: 'https://www.example.com/api/suggested_videos_example.json',
    }
  }
)
```
## JSON example

The Suggested Videos feature expects an array of 12 videos to be displayed in a 4x3 grid format. This is a JSON example of all the data you can pass through per video. The required keys are `id`, `sources`, `thumbnail`, and `title`.

In the configUrl, a new URL that returns a JSON file with 12 new suggested videos can be provided.

**Note**: To enable subtitles for the player, these must be activated in the [`layoutControls`](./subtitles.md#adding-to-fluid-player). Simply providing subtitles is not sufficient.

```json
[
    {
        "id": 0,
        "sources": [
            {
                "url": "https://cdn.example.com/videos/example.mp4",
                "mimeType": "video/mp4",
                "resolution": "720p",
                "hd": "true"
            },
            {
                "url": "https://cdn.example.com/videos/example.mp4",
                "mimeType": "video/mp4",
                "resolution": "480p"
            }
        ],
        "thumbnailUrl": "https://cdn.example.com/thumbnails/example.jpg",
        "title": "A new horizon",
        "subtitles": [
            {
                "label": "English",
                "url": "https://cdn.example.com/subtitles/english.vtt",
                "lang": "en"
            },
            {
                "label": "Deutsch",
                "url": "https://cdn.example.com/deutsch.vtt",
                "lang": "de",
                "default": true
            }
        ],
        "configUrl" : "https://www.example.com/api/new_suggested_videos_example.json"
    },
    ...
]
```

## Thumbnail Recommendations

Fluid Player expects thumbnails to have a 16x9 aspect ratio. Thumbnails in other formats can be used, but a background color will be added to fill the space. For the best appearance, it is recommended to use the 16x9 aspect ratio.

![](/img/docs/configuration/suggested-videos/aspect-ratio.png)
