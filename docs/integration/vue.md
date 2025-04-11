---
title: Using Fluid Player with Vue.js
sidebar_label: Vue.js
---

Fluid Player works with Vue.js out of the box. To start using Fluid Player in your Vue.js project, you will need to:

* install Fluid Player using Yarn or NPM as outlined [here](/docs/integration/quick-setup#integration-using-npm); and
* import Fluid Player module and attach it to video element of your choosing.

You can see an example of how to integrate Fluid Player and Vue.js in the example bellow. This is a simplified example
to get you going quickly. Follow Vue.js best practices on how to create reusable components depending on the needs
of your project.

**IMPORTANT:** switching sources dynamically is not supported. You are **required** to redraw the component OR 
to recreate the Fluid Player instance to change sources or other player configuration. 

```html
<template>
    <div class="fluid-component">
        <video ref="myVideoPlayer">
            <source src='https://cdn.fluidplayer.com/videos/valerian-1080p.mkv'
                    data-fluid-hd
                    title="1080p"
                    type='video/mp4'/>
        </video>
    </div>
</template>

<script>
    import fluidPlayer from 'fluid-player';

    export default {
        name: 'FluidPlayer',
        props: {},
        data() {
            return {
                player: null
            }
        },
        mounted() {
            this.player = fluidPlayer(this.$refs.myVideoPlayer);
        },
        destroyed() {
            if (!this.player) {
                return;
            }

            this.player.destroy();
        }
    }
</script>

<style>
    @import "fluid-player/src/css/fluidplayer.css";

    div.fluid-component, div.fluid-component > video {
        width: 100%;
        height: 100%;
    }
</style>
```

**Note**: Safari does not support playback of .mkv files. To view this file type, consider using a different browser that supports the .mkv format.
