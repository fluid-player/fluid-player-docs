---
date: 2016-08-10T15:00:00+00:00
title: "Builder"
weight: 0
---
<div id="video-holder">
    <video id='my-video-0' controls style="height: 445px; width: 890px;">
        <source src='https://cdn.fluidplayer.com/current/docs/demo/video.mp4' title="1080p" type='video/mp4' />
    </video>
</div>
<hr/>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"/></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js"></script>
<script src="builder.js"></script>

<style>
label {
    font-weight: normal !important;
}
a {
    color: black;
    text-decoration: none !important;
}
a.hover {
    color: #03a9f4;
}
.form-control {
    border-radius: 2px;
}
</style>

<h2> Styling </h2>
<form class="form-horizontal" id="fp_builder">
<fieldset>

<!-- Primary Colour-->
<div class="form-group">
  <label class="col-md-2 control-label" for="primary_color">Primary Color:</label>  
  <div class="col-md-3">
      <input id="primary_color" name="primary_color" type="text" placeholder="#000000" class="form-control input-md">
  </div>
</div>

<!-- Layout & Fill Container -->
<div class="form-group">
  <label class="col-md-2 control-label" for="container_div">Fill Container Div:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="container_div-0">
      <input type="checkbox" name="container_div" id="container_div-0" value="true">
    </label>
	</div>
  </div>
</div>


<!-- Logo-->
<div class="form-group">
  <label class="col-md-2 control-label" for="logo">Display Logo:</label>
  <div class="col-md-1">
  <div class="checkbox">
    <label for="logo-0">
      <input type="checkbox" name="logo" id="logo-0" value="true" onclick="$('.logo-display').toggle();">
    </label>
	</div>
  </div>
  <div class="logo-display" style="display:none;">
      <div class="col-md-2">
         <select id="logo_position" name="logo_position" class="form-control">
            <option value="top left">Top Left</option>
            <option value="top right">Top Right</option>
            <option value="bottom left">Bottom Left</option>
            <option value="bottom right">Bottom Right</option>
         </select>
      </div>
      <label class="col-md-2 control-label" for="logo_opacity">Logo Opacity:</label>
      <div class="col-md-2">
         <div class="input-group">
            <input id="logo_opacity" name="logo_opacity" class="form-control" value="100" type="text">
            <span class="input-group-addon">%</span>
         </div>
      </div>
  </div>
</div>

<div class="logo-display" style="display:none;">
    <div class="form-group">
      <label class="col-md-2 control-label" for="logo_url">Logo URL:</label>  
      <div class="col-md-7">
      <input id="logo_url" name="logo_url" type="text" placeholder="https://route-to-logo.example" class="form-control input-md">
      </div>
    </div>    
    <div class="form-group">
      <label class="col-md-2 control-label" for="logo_click_url">Logo Click URL:</label>  
      <div class="col-md-7">
      <input id="logo_click_url" name="logo_click_url" type="text" placeholder="https://www.landingpage.example" class="form-control input-md">
      </div>
    </div>
</div>

<div class="logo-display" style="display:none;">
    <div class="form-group">
      <label class="col-md-2 control-label" for="logo_margin">Logo Margin:</label>
      <div class="col-md-3">
      <input id="logo_margin" name="logo_margin" type="text" placeholder="2px" class="form-control input-md">
      </div>
      <label class="col-md-3 control-label" for="logo_hide">Logo Hide w/ Controls:</label>
      <div class="col-md-2">
        <div class="checkbox">
          <label for="logo_hide">
            <input type="checkbox" name="logo_hide" id="logo_hide" value="true">
          </label>
      	</div>
      </div>
    </div>
</div>
<div class="logo-display" style="display:none;">
    <div class="form-group">
      <label class="col-md-2 control-label" for="logo_hover_url">Logo Hover URL:</label>  
      <div class="col-md-7">
      <input id="logo_hover_url" name="logo_hover_url" type="text" placeholder="https://route-to-logo-hover.example" class="form-control input-md">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-2 control-label" for="logo_show_ads">Logo Show Over Ads:</label>  
      <div class="col-md-7">
      <input id="logo_show_ads" name="logo_show_ads" type="text" placeholder="https://www.landingpage.example" class="form-control input-md">
      </div>
    </div>
</div>

<h2> Controls </h2>

<!-- Autoplay & Keyboard Controls -->
<div class="form-group">
  <label class="col-md-2 control-label" for="autoplay">Autoplay:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="autoplay-0">
      <input type="checkbox" name="autoplay" id="autoplay-0" value="true">
    </label>
	</div>
  </div>
  <label class="col-md-4 control-label" for="keyboard_controls">Keyboard Controls:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="keyboard_controls-0">
      <input type="checkbox" name="keyboard_controls" id="keyboard_controls-0" value="true" checked>
    </label>
	</div>
  </div>
</div>

<!-- Mute & PlayPause Animation-->
<div class="form-group">
  <label class="col-md-2 control-label" for="mute">Mute On Load:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="mute-0">
      <input type="checkbox" name="mute" id="mute-0" value="true">
    </label>
  </div>
  </div>
  <label class="col-md-4 control-label" for="play_pause_animation">Play/Pause Animation:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="play_pause_animation-0">
      <input type="checkbox" name="play_pause_animation" id="play_pause_animation-0" value="true" checked>
    </label>
    </div>
  </div>
</div>

<!-- Initial Play Button -->
<div class="form-group">
  <label class="col-md-2 control-label" for="show_play">On Load:</label>
  <div class="col-md-10"> 
    <label class="radio-inline" for="show_play-0">
      <input type="radio" name="show_play" id="show_play-0" value="true" checked="checked">
      Show Play Button
    </label> 
    <label class="radio-inline" for="show_play-1">
      <input type="radio" name="show_play" id="show_play-1" value="false">
      Show Control Bar
    </label>
  </div>
</div>

<!-- Auto-hide Controls-->
<div class="form-group">
  <label class="col-md-2 control-label" for="primary_color">Autohide Controls:</label>  
  <div class="col-md-10" style="padding-top:5px;">
      <div style="float:left;" onclick="$('.autohide-display').toggle();">
          <input type="checkbox" name="autohide_enabled" id="autohide_enabled" value="true">
      </div>
      <div class="autohide-display" style="float:left;width:14%;padding-left:13px;display:none;">
          After
          <input id="autohide_seconds" style="width:50%;text-align:center;" name="autohide_seconds" type="text" value="3"  class="input-md">
      </div>
      <div class="autohide-display" style="float:left;padding-left:5px;display:none;">
          second(s)
          <input type="checkbox" name="autohide_animated" id="autohide_animated" value="true" style="margin-left:10px;" checked>
          Animate
      </div>
  </div>
</div>


<!-- Download & Theatre Mode-->
<div class="form-group">
  <label class="col-md-2 control-label" for="download">Download:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="download-0">
      <input type="checkbox" name="download" id="download-0" value="true">
    </label>
	</div>
  </div>
  <label class="col-md-4 control-label" for="theatre">Theatre Mode:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="theatre-0">
      <input type="checkbox" name="theatre" id="theatre-0" value="true" checked>
    </label>
	</div>
  </div>
</div>

<!-- Playback Speed-->
<div class="form-group">
  <label class="col-md-2 control-label" for="playback">Playback Speed:</label>
  <div class="col-md-3">
  <div class="checkbox">
    <label for="playback-0">
      <input type="checkbox" name="playback" id="playback-0" value="true">
    </label>
	</div>
  </div>
</div>

<h2>On-pause HTML</h2>
<!-- HTML On Pause -->
<div class="form-group">
  <label class="col-md-2 control-label" for="on_pause_html">On-pause HTML:</label>
  <div class="col-md-5">                     
    <textarea class="form-control" id="on_pause_html" name="on_pause_html"></textarea>
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-2 control-label" for="on_pause_height">Height:</label>  
  <div class="col-md-2">
     <div class="input-group">
          <input id="on_pause_height" name="on_pause_height" type="text" value="100" class="form-control input-md">
          <span class="input-group-addon">px</span>
     </div>
  </div>
  <label class="col-md-1 control-label" for="on_pause_width">Width:</label>  
  <div class="col-md-2">
     <div class="input-group">
          <input id="on_pause_width" name="on_pause_width" type="text" value="200" class="form-control input-md">
          <span class="input-group-addon">px</span>
     </div>
  </div>
</div>

</fieldset>
</form>


<pre>
<code class="hljs xml" id="fp_fill">
</code>
</pre>
<br/>
<input type="button" class="btn btn-clipboard" value="Copy to Clipboard">