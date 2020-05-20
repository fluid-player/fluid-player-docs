---
title: Advertisements
sidebar_label: Advertisements
---

There are optional parameters that can be used to customise the Fluid Player ad serving. 
No parameters are required and will default if not passed through.
Vast options relate to the ads served and the how the player handles them

These options are specifically for when ads are shown in the player.

<div class="docs-player" data-instance="vast"></div>

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
            showPlayButton:             false,
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
* **fallbackVastTags (Optional):** An array which holds the Vast Urls, if Url in vastTag fails then player will try with these.
* **adText (Optional for linear ads):** The [adText section](#adtext) describes the ability to set text to appear on ads.
    By using this parameter in the **adList** you can specify unique text per ad.
* **adTextPosition (Optional for linear ads):** Only relevent if **adText** is in use. This allows you to set the position of **adText** per ad.
* **adClickable (Optional for linear ads):** Disable opening the landing page in a new tab when the player is clicked, and keep play pause functionality.

We can set **multiple _midRoll_ with the same timer value**, also **multiple _preRoll_, _postRoll_ and _onPauseRoll_** can be set. See the example below:

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adList: [
                {
                    roll: 'preRoll',
                    vastTag: 'vastPreRoll_1.xml',
                    adText: 'Advertising supports us directly'
                },
                {
                    roll: 'preRoll', //multiple preRoll Ads
                    vastTag: 'vastPreRoll_2.xml',
                    adText: 'Advertising supports us directly'
                },                
                {
                    roll: 'midRoll',
                    vastTag: 'vastMidRoll_1.xml',
                    timer: 8
                },
                {
                    roll: 'midRoll',
                    vastTag: 'vastMidRoll_2.xml',
                    // In case vastTag fails, the player will fallback to one of the valid tags from this array
                    fallbackVastTags: ['vastMidRoll_3.xml', 'vastMidRoll_4.xml'],
                    // multiple ads for the same time
                    timer: 8
                },                
                {
                    roll: 'midRoll',
                    vastTag: 'vastMidRoll_2.xml',
                    timer: 10,
                    adClickable: false // Default true
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

![](/img/docs/configuration/ads/adText.png)

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

![](/img/docs/configuration/ads/adctatext.png)

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

![](/img/docs/configuration/ads/showProgressbarMarkers.png)

## showPlayButton
Option to show play button icon after ad video has stopped. By default this parameter will be set to **false**, but can be enabled as shown below.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            showPlayButton: true // Default false
        }
    }
);
```

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

## adClickable
Clicking the player while an in-stream ad is showing will open open the landing page in a new tab. 
If you wish to disable this, and only allow opening the landing page via the [call to action](#adctatext), you can use the **adClickable** parameter.
This can be set for all in-stream ads or per ad listed. For details on how to add it per ad please see the [adlist](#adlist) section.

```javascript
fluidPlayer(
   'my-video',
    {
        vastOptions: {
            adClickable: false // Default true
        }
    }
);
```

## VPAID
Unlike regular VAST ads, VPAID is very dynamic and interactive.  
For more info https://www.iab.com/guidelines/digital-video-player-ad-interface-definition-vpaid-2-0/  
To enable loading VPAID ads **allowVPAID** option has to be set to true (false by default).  
Player supports VPAID version 2.0 

```javascript
fluidPlayer(
    'video-vpaid-ads',
    {
        vastOptions: {
            allowVPAID: true, // Default false.
            adList: [
                {
                    roll: 'preRoll',
                    vastTag: './vastxmls/vpaid_linear.xml'
                },
                {
                    roll: 'midRoll',
                    vastTag: './vastxmls/vpaid_nonlinear.xml',
                    timer: 5
                },
            ]
        }
    }
);
```
