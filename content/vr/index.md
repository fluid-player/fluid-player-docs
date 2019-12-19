---
title: "VR (experimental)"
type: homepage
---

Currently the player supports monoscopic (equirectangular) videos with 360-degree view, the original would look like this:

<img src="monoscopic-example.png" style="width:600px;margin:auto;display:flex;">


With the possibility to render them as a 360 panorama or in "cardboard mode" if the cardboard icon is clicked.
To enable the VR feature **showCardBoardView** has to be set to true.

```html
<video id='vr-video' crossorigin="anonymous">
    <source src='monoscopicvideo.mp4' title='1080p'  type="video/mp4"  />
</video>

<script>
fluidPlayer(
    'vr-video',
    {
        layoutControls: {
            showCardBoardView: true,
            showCardBoardJoystick: true
        }
    }
);
</script>
```

<br/>
<video id='vr-video' controls style="width:720px;height:405px;" crossorigin="anonymous">
    <source src='https://pchen66.github.io/Panolens/examples/asset/textures/video/ClashofClans.mp4' title='1080p'  type="video/mp4"  />
</video>


<link rel="stylesheet" href="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.css" type="text/css"/>
<script src="https://cdn.fluidplayer.com/v2/current/fluidplayer.min.js"></script>
<script src="vr.js"></script>


## Ads
Currently we can show only 360degree video ads. 
Ads need to be served under VAST, with attribute **mediaType="360"** in <MediaFile> tag.
Non-linear ads are not supported.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<VAST version="3.0">
  <Ad id="1">
    <InLine>
      <AdSystem>example1</AdSystem>
      <AdTitle/>
      <Impression id="example1"><![CDATA[https://example1.com/view?tracking_event=impression&idzone=9999999]]></Impression>
      <Impression id="example12"><![CDATA[https://example1.com/view2?tracking_event=impression&idzone=9999999]]></Impression>
      <Creatives>
        <Creative sequence="1" id="1">
          <Linear skipoffset="00:00:03">
            <TrackingEvents>
              <Tracking event="progress" offset="00:00:01.000"><![CDATA[https://example1.com/view?tracking_event=progress&progress=00:00:01.000&idzone=9999999]]></Tracking>
              <Tracking event="progress" offset="00:00:02.000"><![CDATA[https://example1.com/view?tracking_event=progress&progress=00:00:02.000&idzone=9999999]]></Tracking>
              <Tracking event="progress" offset="00:00:05.000"><![CDATA[https://example1.com/view?tracking_event=progress&progress=00:00:05.000&idzone=9999999]]></Tracking>
              <Tracking event="progress" offset="00:00:05.000"><![CDATA[https://example1.com/view2?tracking_event=progress&progress=00:00:05.000&idzone=9999999]]></Tracking>
              <Tracking event="progress" offset="00:00:09.000"><![CDATA[https://example1.com/view?tracking_event=progress&progress=00:00:09.000&idzone=9999999]]></Tracking>
              <Tracking event="start"><![CDATA[https://example1.com/view?tracking_event=start&idzone=9999999]]></Tracking>
              <Tracking event="firstQuartile"><![CDATA[https://example1.com/view?tracking_event=firstQuartile&idzone=9999999]]></Tracking>
              <Tracking event="midpoint"><![CDATA[https://example1.com/view?tracking_event=midpoint&idzone=9999999]]></Tracking>
              <Tracking event="midpoint"><![CDATA[https://example1.com/view2?tracking_event=midpoint&idzone=9999999]]></Tracking>
              <Tracking event="midpoint"><![CDATA[https://example1.com/view3?tracking_event=midpoint&idzone=9999999]]></Tracking>
              <Tracking event="thirdQuartile"><![CDATA[https://example1.com/view?tracking_event=thirdQuartile&idzone=9999999]]></Tracking>
              <Tracking event="complete"><![CDATA[https://example1.com/view?tracking_event=complete&idzone=9999999]]></Tracking>
            </TrackingEvents>
            <VideoClicks>
              <ClickThrough><![CDATA[https://example1.com/]]></ClickThrough>
              <ClickTracking><![CDATA[https://example1.com/view?tracking_event=click&idzone=9999999]]></ClickTracking>
              <ClickTracking><![CDATA[https://example1.com/view2?tracking_event=click&idzone=9999999]]></ClickTracking>
            </VideoClicks>
            <MediaFiles>
              <MediaFile delivery="progressive" type="video/mp4" mediaType="360"><![CDATA[https://player.omnivirt.com/2015/12/18/12/51/14/435bc71d-2a24-4b51-a696-edbb46804273/infiniti-720p-medium.mp4]]></MediaFile>
            </MediaFiles>
          </Linear>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>
```
