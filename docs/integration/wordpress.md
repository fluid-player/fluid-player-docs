---
title: Wordpress
sidebar_label: Wordpress
---

Fluid Player offers a plugin for Wordpress as a way to quickly integrate your content with Fluid Player.
The plugin always use the latest Fluid Player version.

The recommended approach to use the plugin shortcode is as follows:

```
[fluid-player-extended]

    [fluid-player-options]
        {
            layoutControls: {},
            vastOptions: {}
        }
    [/fluid-player-options]

    [fluid-player-multi-res-video]
        [
            {"label": "720", "url": "https://cdn.fluidplayer.com/videos/valerian-720p.mkv"},
        ]
    [/fluid-player-multi-res-video]

[/fluid-player-extended]
```

**Note**: Safari does not support playback of .mkv files. To view this file type, consider using a different browser that supports the .mkv format.

You can find more information at the [wordpress.org plugin page](https://wordpress.org/plugins/fluid-player/#installation).
