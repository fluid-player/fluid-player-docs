$( document ).ready(function() {
    var counter = 0;
    $("#fp_builder").change(function() {
        htmlToUse = getFluidParams();
        fillBuilderTextDiv(htmlToUse);
        redoFluidPlayer(counter, htmlToUse);
        counter++;
    });

    // Prevent the jumping when switching options
    var minHeight = (parseInt($('#video-holder').height()) + 75) + "px";
    $('#video-holder').css("min-height", minHeight);

    // Set up our Fluid Player & copy text on the page
    fluidPlayer('my-video-0');
    fluidParams = getFluidParams();
    fillBuilderTextDiv(fluidParams);

    new Clipboard('.btn-clipboard', {
        text: function() {
            return $('#fp_fill').text();
        }
    });
});

function getFluidParams() {
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

    fluidParams = "" +
        "    var myFP = fluidPlayer(\n" +
        "        'video-id',\n" +
        "        {\n" +
        "            layoutControls: {\n" +
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
        "    );\n";

    return fluidParams;
}

function fillBuilderTextDiv(textToFill) {
    var fillDivText = "\n" +
        "\<link rel=\"stylesheet\" href=\"http://cdn.fluidplayer.com/v2/current/fluidplayer.min.css\" type=\"text/css\"/>\n" +
        "\<script src=\"http://cdn.fluidplayer.com/v2/current/fluidplayer.min.js\"></script> \n\n" +
        "\<video id='video-id'>\n" +
        "    \<source src='vid.mp4' type='video/mp4'/>\n" +
        "\</video>\n\n" +
        "\<script>\n" +
        textToFill +
        "\</script>";
    $('#fp_fill').text(fillDivText);
}

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

function evalFillToContainer() {
    fillToContainer = "\t\tfillToContainer: false,\n";
    fillDiv = $('input[name=container_div]:checked').val();
    if (fillDiv) {
        fillToContainer = "\t\tfillToContainer: true,\n";
    }
    return fillToContainer;
}

function evalPrimaryColor() {
    primaryColorSetting = "\t\tprimaryColor: false,\n";
    primaryColor = $('#primary_color').val();
    if (primaryColor != "") {
        primaryColorSetting = "\t\tprimaryColor: \"" + primaryColor + "\",\n";
    }
    return primaryColorSetting;
}

function evalAutoplay() {
    autoplaySetting = "\t\tautoPlay: false,\n";
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
    playBtnSetting = "\t\tplayButtonShowing: true,\n";
    playButtonShowing = $('input[name=show_play]:checked').val();
    if (playButtonShowing == 'false') {
        playBtnSetting = "\t\tplayButtonShowing: false,\n";
    }
    return playBtnSetting;
}

function evalMute() {
    muteSetting = "\t\tmute: false,\n";
    mute = $('input[name=mute]:checked').val();
    if (mute) {
        muteSetting = "\t\tmute: true,\n";
    }
    return muteSetting;
}

function evalPlayPauseAnimation() {
    playPauseAnimationSetting = "\t\tplayPauseAnimation: true,\n";
    playPauseAnimation = $('input[name=play_pause_animation]:checked').val();
    if (!playPauseAnimation) {
        playPauseAnimationSetting = "\t\tplayPauseAnimation: false,\n";
    }
    return playPauseAnimationSetting;
}

function evalLogo() {
    logoSetting = "\t\tlogo: {\n" +
        "\t\t\timageUrl: null,\n" +
        "\t\t\tposition: 'top left',\n" +
        "\t\t\tclickUrl: null,\n" +
        "\t\t\topacity: 1,\n" +
        "\t\t\tmouseOverImageUrl: null,\n" +
        "\t\t\timageMargin: '2px',\n" +
        "\t\t\thideWithControls: false,\n" +
        "\t\t\tshowOverAds: false\n" +
        "\t\t},\n";
    logoEnabled = $('input[name=logo]:checked').val();
    if (logoEnabled) {
        logoPosition = $('#logo_position').val();
        logoURL      = ($('#logo_url').val() != '') ? "'" + $('#logo_url').val() + "'" : 'null';
        logoClickURL = ($('#logo_click_url').val() != '') ? "'" + $('#logo_click_url').val() + "'" : 'null';
        logoOpacity  = $('#logo_opacity').val();
        logoHoverURL = ($('#logo_hover_url').val() != '') ? "'" + $('#logo_hover_url').val() + "'" : 'null';
        logoMargin   = ($('#logo_margin').val() != '') ? $('#logo_margin').val() : '2px';
        controlsHide = ($('input[name=logo_hide]:checked').val()) ? 'true' : 'false';
        showOverAds  = ($('#logo_show_ads').val() != '') ? $('#logo_show_ads').val() : 'false';

        logoSetting = "\t\tlogo: {\n" +
            "\t\t\timageUrl: " + logoURL + ",\n" +
            "\t\t\tposition: '" + logoPosition +"',\n" +
            "\t\t\tclickUrl: " + logoClickURL +",\n" +
            "\t\t\topacity: " + parseFloat(logoOpacity / 100) + ",\n" +
            "\t\t\tmouseOverImageUrl: " + logoHoverURL + ",\n" +
            "\t\t\timageMargin: '" + logoMargin + "',\n" +
            "\t\t\thideWithControls: " + controlsHide + ",\n" +
            "\t\t\tshowOverAds: " + showOverAds + "\n" +
            "\t\t},\n";
    }
    return logoSetting;
}

function evalHtmlOnPauseBlock() {
    htmlBlock = "\t\thtmlOnPauseBlock: {\n" +
        "\t\t\thtml: null,\n" +
        "\t\t\theight: null,\n" +
        "\t\t\twidth: null\n" +
        "\t\t},\n";
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
    downloadSetting = "\t\tallowDownload: false,\n";
    download = $('input[name=download]:checked').val();
    if (download) {
        downloadSetting = "\t\tallowDownload: true,\n";
    }
    return downloadSetting;
}

function evalTheatre() {
    theatreSetting = "\t\tallowTheatre: true,\n";
    theatre = $('input[name=theatre]:checked').val();
    if (!theatre) {
        theatreSetting = "\t\tallowTheatre: false,\n";
    }
    return theatreSetting;
}

function evalPlaybackRate() {
    playbackSetting = "\t\tplaybackRateEnabled: false,\n";
    playback = $('input[name=playback]:checked').val();
    if (playback) {
        playbackSetting = "\t\tplaybackRateEnabled: true,\n";
    }
    return playbackSetting;
}

function evalControlBar() {
    controlBar = "\t\tcontrolBar: {\n" +
        "\t\t\tautoHide: false,\n" +
        "\t\t\tautoHideTimeout: 3,\n" +
        "\t\t\tanimated: true\n" +
        "\t\t},\n";
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