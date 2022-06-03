---
title: Advanced configuration
sidebar_label: Advanced
---

Advanced configuration allows you to interact with the building blocks of the player itself.

## modules

Module configuration is a set of runtime callbacks you can use to further configure modular components of the
Fluid Player, such as streaming.

These callbacks can be called more than once during player initialization and normal lifecycle of the player.

```js
fluidPlayer(
  'my-video',
  {
    modules: {
      configureHls: (options) => {
        return options;
      },
      onBeforeInitHls: (hls) => {
      },
      onAfterInitHls: (hls) => {
      },
      configureDash: (options) => {
        return options;
      },
      onBeforeInitDash: (dash) => {
      },
      onAfterInitDash: (dash) => {
      }
    }
  }
)
```

### configureHls

This callback allows you to configure HLS.js options. This callback receives one argument - object with default HLS options
set by the Fluid Player itself. It must return a single object - final configuration options for the HLS instance.
You can modify this object as you see fit. See [hls.js](https://github.com/video-dev/hls.js) documentation for more
information about the available configuration options.

### onBeforeInitHls

This callback is called immediately before an instance of HLS.js is initialized from Fluid Player perspective -
before the HLS.js is attached to the player with chosen source.

This callback accepts one argument - the instance of HLS.js object.

### onAfterInitHls

This callback is called immediately after an instance of HLS.js is initialized from Fluid Player perspective -
after the HLS.js is attached to the player with chosen source.

This callback accepts one argument - the instance of HLS.js object.

### configureDash

This callback allows you to configure Dash.js options. This callback receives one argument - object with default Dash options
set by the Fluid Player itself. It must return a single object - final configuration options for the Dash instance.
You can modify this object as you see fit. See [Dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki) documentation for more
information about the available configuration options.

### onBeforeInitDash

This callback is called immediately before an instance of Dash.js is initialized from Fluid Player perspective -
before the Dash.js method `initialize` is called.

This callback accepts one argument - the instance of Dash.js object.

### onAfterInitDash

This callback is called immediately after an instance of Dash.js is initialized from Fluid Player perspective -
after the Dash.js method `initialize` is called.

This callback accepts one argument - the instance of Dash.js object.

## XHR configuration

XHR configuration is a set of runtime callbacks allowing you to modify and customize all HTTP requests sent by Fluid Player
and its native modules.

You can use these configuration callbacks to modify the behavior and configuration of the requests.

**Important:** these callbacks DO NOT apply to requests made by third party modules, such as Dash.js, HLS.js and similar. You
need to use the native configuration callbacks of those modules specifically. 

```js
fluidPlayer(
  'my-video',
  {
    onBeforeXMLHttpRequestOpen: (request) => {
    },
    onBeforeXMLHttpRequest: (request) => {
    },
  }
)
```

### onBeforeXMLHttpRequestOpen

This callback is called immediately before the `XMLHttpRequest#open` method is called. It receives one argument -
an instance of `XMLHttpRequest` about to be sent.

### onBeforeXMLHttpRequest

This callback is called immediately before the `XMLHttpRequest#send` method is called. It receives one argument -
an instance of `XMLHttpRequest` about to be sent.
