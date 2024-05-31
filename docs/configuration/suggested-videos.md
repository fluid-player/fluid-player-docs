---
title: Suggested videos
sidebar_label: Suggested videos
---

At the end of the video, the player will show a grid of 12 suggested videos to engage the viewer to watch more videos and stay on the platform.

## Configuration

The suggested videos are designed to give all the power to the developer. The only thing you need to pass is a url that returns a `JSON` file. This can be be everything from a static `.json` file to an api call that returns an array of 12 videos.

If you're using an api, you can use query params to pass on data of the current video, eg. tags, and use it to create a more accurate and personalised grid of suggested videos.

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

The suggested videos expects an array of 12 videos that will be displayed in a 4x3 grid format. This is a JSON example of all the data you can pass through per video. The required keys are `id`, `sources`, `thumbnail` and `title`.

Remember, if you want the player to have subtitles, you still need to enable it in the [`layoutControls`](./subtitles.md#adding-to-fluid-player). Just passing subtitles will not be enough to enable that feature.

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
        ]
    },
    ...
]
```
