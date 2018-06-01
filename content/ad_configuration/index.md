---
title: "Ad Configuration"
type: homepage
---

There are optional parameters that can be used to customise the Fluid Player ad serving. 
No parameters are required and will default if not passed through.
Vast options relate to the ads served and the how the player handles them

These options are specifically for when ads are shown in the player.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adList:                     {},
            skipButtonCaption:          'Skip ad in [seconds]',
            skipButtonClickCaption:     'Skip ad <span class="skip_button_icon"></span>',
            adText:                     null,
            adTextPosition:             'top left',
            adCTAText:                  'Visit now!',
            adCTATextPosition:          'bottom right',
            vastTimeout:                5000,
            maxAllowedVastTagRedirects: 1,

            vastAdvanced: {
                vastLoadedCallback:       (function() {}),
                noVastVideoCallback:      (function() {}),
                vastVideoSkippedCallback: (function() {}),
                vastVideoEndedCallback:   (function() {})
            }
        }
    }
);
```

## adList
Setup one or multiple VAST tag. For each of the tags there are multiple options.
Please note the VAST tag XML response `Content-Type` must be either `application/xml` or `text/xml`.

* **roll (mandatory):** The available timeline positions: _preRoll_, _midRoll_, _postRoll_, _onPauseRoll_.
* **vastTag (mandatory):** The url of the VAST XML (Please find the supported tags/attributes vastLinear.xml)
* **timer (only for mid-roll):** the timer property schedules when the ad should show. There are two ways to define this:
  - **[seconds]:** The number of seconds until the ad begins. Example: _timer: 10_
  - **[percentage]:** The percentage of the video to show before the ad begins. Example: _timer: 50%_
* **adText (Optional for linear ads):** The [adText section](#adtext) describes the ability to set text to appear on ads.
    By using this parameter in the **adList** you can specify unique text per ad.
* **adTextPosition (Optional for linear ads):** Only relevent if **adText** is in use. This allows you to set the position of **adText** per ad.

We can set multiple _midRoll_ VAST tags, however only one _preRoll_ and _postRoll_ can be set. See the example below:

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adList: [
                {
                    roll: 'preRoll',
                    vastTag: 'vastPreRoll.xml',
                    adText: 'Advertising supports us directly'
                },
                {
                    roll: 'midRoll',
                    vastTag: 'vastMidRoll.xml',
                    timer: 8
                },
                {
                    roll: 'midRoll',
                    vastTag: 'vastMidRoll2.xml',
                    timer: 10
                },
                {
                    roll: 'postRoll',
                    vastTag: 'vastPostRoll.xml',
                    adText: 'Thanks for watching',
                    adTextPosition: 'top right'
                }
            ]
        }
    }
);
```
                        
* **vAlign** (only for nonLinear, optional): The available vertical positions for nonLinear Ads: top, middle, bottom. Default: bottom.
* **nonLinearDuration** (only for nonLinear, optional): The number of seconds until the nonLinear Ad will be shown. If not set nor the minSuggestedDuration attribute of VAST XML than wont close until end of video.
* **size** (only for nonLinear, optional): The dimension of the Ad. Supported sizes: 468x60, 300x250, 728x90

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adList: [
                {
                    roll: 'onPauseRoll',
                    vastTag: 'vastNonLinear.xml',
                    vAlign: 'top',
                    nonlinearDuration: 10,
                    size: '300x250'
                }
            ]
        }
    }
);
```

## skipButtonCaption
The text to display the countdown during an ad. The **[seconds]** placeholder is used for the second countdown.
(**Default:** "Skip ad in [seconds]")

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            skipButtonCaption: 'Wait [seconds] more second(s)'
        }
    }
);
```

## skipButtonClickCaption
This defines the text to show when the countdown is finished and the user can skip to the main video.
(**Default:** 'Skip ad <span class="skip_button_icon"></span>')

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            skipButtonClickCaption: 'Watch main video <span class="skip_button_icon"></span>'
        }
    }
);
```

## adText
Custom text can be shown when an in-stream ad plays. This text appears in the top left corner of the player and will be set to the primary colour.
Has additional adTextPosition parameter, that can have values, like 'top right', 'top left', 'bottom right', 'bottom left'.
Ad text and position can also be set on a [per ad basis](#adlist).

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adText: 'Advertising helps us keep the lights on', // Default null,
            adTextPosition: 'top left' // Default 'top left'
        }
    }
);
```

<img src="screenshots/adText.png" style="width:600px;margin:auto;display:flex;">

## adCTAText
The landing page of the advertisement will show in the adCTAText area. You can add custom text above this URL, or you choose to disable this.
The screenshot below shows how it will appear by default, and the code below shows how to alter or disable it.
Has additional adCTATextPosition parameter, that can have values, like 'top right', 'top left', 'bottom right', 'bottom left'.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            // adCTAText: 'Subscribe now!', // Default "Visit now!",
            // adCTATextPosition: 'bottom left', //Default 'bottom right'
            adCTAText: false // Disable adCTAText
        }
    }
);
```

<img src="screenshots/adctatext.png" style="width:600px;margin:auto;display:flex;">

## vastTimeout
This parameter lets you set the time, in milliseconds, to wait for the VAST to load. (**Default:** 5000)

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            vastTimeout: 1000 // Default 5000
        }
    }
);
```

## vastAdvanced
We can specify the callback functions on the different VAST events.

* **vastLoadedCallback:** When the VAST has loaded.
* **noVastVideoCallback:** When there is no VAST video.
* **vastVideoSkippedCallback:** If the ad is skipped.
* **vastVideoEndedCallback:** When the ad has ended.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            vastAdvanced: {
                vastLoadedCallback:       (function() { console.log("Here one event") }),
                noVastVideoCallback:      (function() { console.log("Here another") }),
                vastVideoSkippedCallback: (function() { console.log("Here one more") }),
                vastVideoEndedCallback:   (function() { console.log("Here's the last") })
            }
        }
    }
);
```

## showProgressbarMarkers
There is the option to show in the progress bar where non-linear ads will appear. By default this parameter will be set to **false**, but can be enabled as shown below.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            showProgressbarMarkers: true // Default false
        }
    }
);
```

<img src="screenshots/showProgressbarMarkers.png" style="width:600px;margin:auto;display:flex;">


## maxAllowedVastTagRedirects
Fluid Player supports VAST wrappers through <VASTAdTagURI>.The `maxAllowedVastTagRedirects` sets the maximum allowed redirects (wrappers).

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            maxAllowedVastTagRedirects: 1 // Default 3
        }
    }
);
```