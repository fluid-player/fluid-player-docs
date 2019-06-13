fluidPlayer(
    'my-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbnails.vtt',
                type: 'VTT'
            },
            logo: {
                imageUrl: 'fluidplayer.png', // Default null
                position: 'top right', // Default 'top left'
                opacity:  0.5 // Default 1
            },
            fillToContainer: true,
            controlBar: {
                autoHide: false
            }
        },
        vastOptions: {
            adText: 'advertisement',
            adList: [{roll: 'preRoll', vastTag: 'vastLinear.xml'}],
            vastLoadedCallback: function() {console.log('vast loaded');},
            noVastVideoCallback: function() {console.log('no vast');},
            vastVideoSkippedCallback: function() {console.log('vast skipped');},
            vastVideoEndedCallback: function() {console.log('vast ended');},
            playerInitCallback: function() {console.log('Player "test-video" initiation called');},
        }
    }
);

fluidPlayer(
    'colour-video',
    {
        layoutControls: {
            primaryColor: '#28B8ED',
            timelinePreview: {
                file: 'thumbnails.vtt',
                type: 'VTT'
            },
            logo: {
                imageUrl: 'fluidplayer.png', // Default null
                position: 'top right', // Default 'top left'
                opacity:  0.5 // Default 1
            },
            fillToContainer: true,
            controlBar: {
                autoHide: false
            }
        },
        vastOptions: {
            adText: 'advertisement',
            adList: [{roll: 'preRoll', vastTag: 'vastLinear.xml'}],
            vastLoadedCallback: function() {console.log('vast loaded');},
            noVastVideoCallback: function() {console.log('no vast');},
            vastVideoSkippedCallback: function() {console.log('vast skipped');},
            vastVideoEndedCallback: function() {console.log('vast ended');},
            playerInitCallback: function() {console.log('Player "test-video" initiation called');},
        }
    }
);

fluidPlayer(
    'vast-video',
    {
        layoutControls: {
            timelinePreview: {
                file: 'thumbnails.vtt',
                type: 'VTT'
            },
            logo: {
                imageUrl: 'fluidplayer.png', // Default null
                position: 'top right', // Default 'top left'
                opacity:  0.5 // Default 1
            },
            fillToContainer: true,
            controlBar: {
                autoHide: false
            }
        },
        vastOptions: {
            adText: 'advertisement',
            adList: [
                {
                    roll: 'preRoll',
                    vastTag: 'vastLinear.xml'
                },
                {
                    roll: 'midRoll',
                    vastTag: 'vastNonLinear.xml',
                    timer: 3
                },
                {
                    roll: 'midRoll',
                    vastTag: 'vastLinear.xml',
                    timer: 8
                },
                {
                    roll: 'postRoll',
                    vastTag: 'vastLinear.xml'
                }
            ],
            vastLoadedCallback: function() {console.log('vast loaded');},
            noVastVideoCallback: function() {console.log('no vast');},
            vastVideoSkippedCallback: function() {console.log('vast skipped');},
            vastVideoEndedCallback: function() {console.log('vast ended');},
            playerInitCallback: function() {console.log('Player "test-video" initiation called');},
        }
    }
);

fluidPlayer(
    'autoplay-video',
    {
        layoutControls: {
            fillToContainer: true,
            mute: true,
            autoPlay: true
        }
    }
);

fluidPlayer(
    'playback-video',
    {
        layoutControls: {
            fillToContainer: true,
            playbackRateEnabled: true
        }
    }
);

fluidPlayer(
    'download-video',
    {
        layoutControls: {
            fillToContainer: true,
            allowDownload: true
        }
    }
);