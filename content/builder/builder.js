$( document ).ready(function() {
    var counter = 0;
    $("#fp_builder").change(function() {
        var layout = evalLayout();
        var fillToContainer = evalFillToContainer();
        var primaryColor = evalPrimaryColor();
        var autoplay = evalAutoplay();
        var keyboardControl = evalKeyboardControl();
        var playButtonShowing = evalPlayButtonShowing();
        var mute = evalMute();
        var playPauseAnimation = evalPlayPauseAnimation();
        var logo = evalLogo();
        var onPauseHtml = evalHtmlOnPauseBlock();
        var download = evalDownload();
        var theatre = evalTheatre();
        var playbackRate = evalPlaybackRate();
        var controlBar = evalControlBar();

        var htmlToUse = "\n" +
            "    var myFP = fluidPlayer(\n" +
            "        'video-id',\n" +
            "        {\n" +
            "            layoutControls: {\n" +
                            layout +
                            fillToContainer +
                            primaryColor +
                            autoplay +
                            keyboardControl +
                            playButtonShowing +
                            playPauseAnimation +
                            mute +
                            logo +
                            onPauseHtml +
                            download +
                            theatre +
                            playbackRate +
                            controlBar +
            "            },\n" +
            "            vastOptions: {\n" +
            "                // To implement ads see http://docs.fluidplayer.com/ad_configuration/\n" +
            "            }\n" +
            "        }\n" +
            "    );";
        $('#fp_fill').text(htmlToUse);

        redoFluidPlayer(counter, htmlToUse);
        counter++;
    });

    fluidPlayer('my-video-0');

    new Clipboard('.btn-clipboard', {
        text: function() {
            return $('#fp_fill').text();
        }
    });
});

function redoFluidPlayer(counter, htmlToUse) {
    videoHolder = document.getElementById('fluid_video_wrapper_my-video-' + counter);
    var new_element = videoHolder.cloneNode(true);
    videoHolder.parentNode.replaceChild(new_element, videoHolder);

    extractedVideo = document.getElementById('my-video-' + counter);
    var newVideo = extractedVideo.cloneNode(true);
    counter++;
    newId = 'my-video-' + counter;
    newVideo.id = newId;

    $('#video-holder').html(newVideo);

    htmlToUse = htmlToUse.replace("video-id", newId);
    eval(htmlToUse);
}

function evalLayout() {
    layoutSetting = '';
    layout = $('input[name=layout]:checked').val();
    if (layout == "browser") {
        layoutSetting = "\t\tlayout: 'browser',\n";
    }
    return layoutSetting;
}

function evalFillToContainer() {
    fillToContainer = "";
    fillDiv = $('input[name=container_div]:checked').val();
    if (fillDiv) {
        fillToContainer = "\t\tfillToContainer: true,\n";
    }
    return fillToContainer;
}

function evalPrimaryColor() {
    primaryColorSetting = "";
    primaryColor = $('#primary_color').val();
    if (primaryColor != "") {
        primaryColorSetting = "\t\tprimaryColor: \"" + primaryColor + "\",\n";
    }
    return primaryColorSetting;
}

function evalAutoplay() {
    autoplaySetting = "";
    autoplay = $('input[name=autoplay]:checked').val();
    if (autoplay) {
        autoplaySetting = "\t\tautoPlay: true,\n";
    }
    return autoplaySetting;
}

function evalKeyboardControl() {
    keyboardControlSetting = "";
    keyboardControl = $('input[name=keyboard_controls]:checked').val();
    if (!keyboardControl) {
        keyboardControlSetting = "\t\tkeyboardControl: false,\n";
    }
    return keyboardControlSetting;
}

function evalPlayButtonShowing() {
    playBtnSetting = "";
    playButtonShowing = $('input[name=show_play]:checked').val();
    if (playButtonShowing == 'false') {
        playBtnSetting = "\t\tplayButtonShowing: false,\n";
    }
    return playBtnSetting;
}

function evalMute() {
    muteSetting = "";
    mute = $('input[name=mute]:checked').val();
    if (mute) {
        muteSetting = "\t\tmute: true,\n";
    }
    return muteSetting;
}

function evalPlayPauseAnimation() {
    playPauseAnimationSetting = "";
    playPauseAnimation = $('input[name=play_pause_animation]:checked').val();
    if (!playPauseAnimation) {
        playPauseAnimationSetting = "\t\tplayPauseAnimation: false,\n";
    }
    return playPauseAnimationSetting;
}

function evalLogo() {
    logoSetting = "";
    logoEnabled = $('input[name=logo]:checked').val();
    if (logoEnabled) {
        logoPosition = $('#logo_position').val();
        logoURL      = $('#logo_url').val();
        logoClickURL = $('#logo_click_url').val();
        logoOpacity  = $('#logo_opacity').val();

        logoSetting = "\t\tlogo: {\n" +
            "\t\t\timageUrl: '" + logoURL + "',\n" +
            "\t\t\tposition: '" + logoPosition +"',\n" +
            "\t\t\tclickUrl: '" + logoClickURL +"',\n" +
            "\t\t\topacity: " + parseFloat(logoOpacity / 100) + "\n" +
            "\t\t},\n";
    }
    return logoSetting;
}

function evalHtmlOnPauseBlock() {
    htmlBlock = "";
    htmlSet = $('#on_pause_html').val();
    if (htmlSet != "") {
        htmlWidth = $('#on_pause_width').val();
        htmlHeight = $('#on_pause_height').val();

        htmlBlock = "\t\thtmlOnPauseBlock: {\n" +
            "\t\t\thtml: '" + htmlSet + "',\n" +
            "\t\t\theight: " + htmlHeight +",\n" +
            "\t\t\twidth: " + htmlWidth +"\n" +
            "\t\t},\n";
    }
    return htmlBlock;
}

function evalDownload() {
    downloadSetting = "";
    download = $('input[name=download]:checked').val();
    if (download) {
        downloadSetting = "\t\tallowDownload: true,\n";
    }
    return downloadSetting;
}

function evalTheatre() {
    theatreSetting = "";
    theatre = $('input[name=theatre]:checked').val();
    if (!theatre) {
        theatreSetting = "\t\tallowTheatre: false,\n";
    }
    return theatreSetting;
}

function evalPlaybackRate() {
    playbackSetting = "";
    playback = $('input[name=playback]:checked').val();
    if (playback) {
        playbackSetting = "\t\tplaybackRateEnabled: true,\n";
    }
    return playbackSetting;
}

function evalControlBar() {
    controlBar = "";
    autoHide = $('input[name=autohide_enabled]:checked').val();
    if (autoHide) {
        autoHideTime = $('#autohide_seconds').val();
        autoHide = ($('input[name=autohide_animated]:checked').val()) ? true : false;

        controlBar = "\t\tcontrolBar: {\n" +
            "\t\t\tautoHide: true,\n" +
            "\t\t\tautoHideTimeout: " + autoHideTime + ",\n" +
            "\t\t\tanimated: " + autoHide +"\n" +
            "\t\t},\n";
    }

    return controlBar;
}