'use strict';

// Note: this code is not post-processed. Use ES5 only.

(function () {
  // TODO: remove for v3
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);
  // ENDTODO

  // Define available documentation players
  // Embed in markdown like <div class="docs-player" data-instance="overview"></div>
  var defaultSources = [
    {
      src: 'https://cdn.fluidplayer.com/videos/valerian-1080p.mkv',
      type: 'video/mp4',
      title: '1080p',
      'data-fluid-hd': true
    },
    {
      src: 'https://cdn.fluidplayer.com/videos/valerian-720p.mkv',
      type: 'video/mp4',
      title: '720p',
      'data-fluid-hd': true
    },
    {
      src: 'https://cdn.fluidplayer.com/videos/valerian-480p.mkv',
      type: 'video/mp4',
      title: '480p'
    }
  ];

  var players = {
    overview: function () {
      return {
        options: {
          layoutControls: {
            posterImage: '/player/video-thumbnail.jpg',
            timelinePreview: {
              file: '/player/thumbnails.vtt',
              type: 'VTT'
            },
            fillToControls: true,
            playbackRateEnabled: true,
            playButtonShowing: true,
            playPauseAnimation: true
          }
        },
        attributes: {},
        sources: defaultSources
      }
    },
    vast: function () {
      return {
        options: {
          layoutControls: {
            posterImage: '/player/video-thumbnail.jpg',
            timelinePreview: {
              file: '/player/thumbnails.vtt',
              type: 'VTT'
            },
            fillToControls: true,
            playbackRateEnabled: true,
            playButtonShowing: true,
            playPauseAnimation: true
          },
          vastOptions: {
            allowVPAID: true,
            adList: [
              {
                roll: 'preRoll',
                vastTag: '/player/vpaid_linear.xml'
              },
              {
                roll: 'midRoll',
                vastTag: '/player/vpaid_nonlinear.xml',
                timer: 4
              }
            ]
          }
        },
        attributes: {},
        sources: defaultSources
      }
    },
    previews: function () {
      return {
        options: {
          layoutControls: {
            posterImage: '/player/video-thumbnail.jpg',
            timelinePreview: {
              file: '/player/thumbnails.vtt',
              type: 'VTT'
            }
          }
        },
        attributes: {},
        sources: defaultSources
      }
    },
    subtitles: function () {
      return {
        options: {
          layoutControls: {
            subtitlesEnabled: true
          }
        },
        attributes: {},
        sources: [
          {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            type: 'video/mp4'
          }
        ],
        tracks: [
          {label: 'English', kind: 'metadata', srclang: 'en', src: '/player/subtitles/english.vtt', default: true},
          {label: 'Deutsch', kind: 'metadata', srclang: 'de', src: '/player/subtitles/deutsch.vtt', default: true}
        ]
      }
    },
    vr: function () {
      return {
        options: {
          layoutControls: {
            showCardBoardView: true,
            showCardBoardJoystick: true
          }
        },
        attributes: {
          crossorigin: 'anonymous'
        },
        sources: [
          {
            src: 'https://pchen66.github.io/Panolens/examples/asset/textures/video/ClashofClans.mp4',
            type: 'video/mp4'
          }
        ]
      }
    },
    hls: function () {
      return {
        options: {},
        attributes: {},
        sources: [
          {
            src: 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
            type: 'application/x-mpegURL'
          }
        ]
      }
    },
    dash: function () {
      return {
        options: {},
        attributes: {},
        sources: [
          {
            src: 'https://dash.akamaized.net/dash264/TestCases/1a/sony/SNE_DASH_SD_CASE1A_REVISED.mpd',
            type: 'application/dash+xml'
          }
        ]
      }
    }
  };

  var createPlayerHtml = function (id, definition) {
    var player = document.createElement('video');

    if (null !== id) {
      player.className = 'fp_docs_player';
      player.id = 'fp_docs_player_' + id.toString();
    }

    if (!!definition.attributes) {
      for (var prop in definition.attributes) {
        if (!definition.attributes.hasOwnProperty(prop)) {
          continue;
        }
        player.setAttribute(prop, definition.attributes[prop]);
      }
    }

    if (!!definition.sources) {
      for (var si = 0; si < definition.sources.length; si++) {
        var sourceDefinition = definition.sources[si];
        var source = document.createElement('source');

        for (var sourceProp in sourceDefinition) {
          if (!sourceDefinition.hasOwnProperty(sourceProp)) {
            continue;
          }
          source[sourceProp] = sourceDefinition[sourceProp];
        }
        player.appendChild(source);
      }
    }

    if (!!definition.tracks) {
      for (var ti = 0; ti < definition.tracks.length; ti++) {
        var trackDefinition = definition.tracks[ti];
        var track = document.createElement('track');

        for (var trackProp in trackDefinition) {
          if (!trackDefinition.hasOwnProperty(trackProp)) {
            continue;
          }
          track[trackProp] = trackDefinition[trackProp];
        }
        player.appendChild(track);
      }
    }

    return player;
  };

  var createPlayers = function () {
    var instances = document.getElementsByClassName('docs-player');

    for (var i = 0; i < instances.length; i++) {
      var targetInstance = instances[i];
      var identity = targetInstance.getAttribute('data-instance');

      if (!players.hasOwnProperty(identity)) {
        console.error('Unknown player instance requested - ' + identity);
        continue;
      }

      var definition = players[identity]();
      var player = createPlayerHtml(i, definition);

      targetInstance.appendChild(player);

      // noinspection JSUnresolvedVariable
      setTimeout(fluidPlayer.bind(null, player.id, definition.options || {}), 1);
    }
  };

  var ready = function () {
    createPlayers();
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(ready, 1);
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }
})();
