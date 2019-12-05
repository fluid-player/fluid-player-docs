fluidPlayer(
    'video-ads',
     {
         vastOptions: {
             adList: [
                 {
                     roll: 'preRoll',
                     vastTag: './vastxmls/vastLinear.xml',
                     adText: 'Advertising supports us directly'
                 },
                 {
                     roll: 'preRoll', //multiple preRoll Ads
                     vastTag: './vastxmls/vastLinear_ad2.xml',
                     adText: 'Advertising supports us directly'
                 },                
                 {
                     roll: 'midRoll',
                     vastTag: './vastxmls/vastLinear.xml',
                     timer: 8
                 },
                 {
                     roll: 'midRoll',
                     vastTag: './vastxmls/vastMidRoll_22.xml',
                     fallbackVastTags: ['./vastxmls/vastLinear_ad3.xml', './vastxmls/vastLinear_ad4.xml'], // Incase vastTag fail, player will fallback to one of valid tag from this array  
                     timer: 8 // multiple ad for same time
                 },                
                 {
                     roll: 'midRoll',
                     vastTag: './vastxmls/vastNonLinear.xml',
                     timer: 10,
                     adClickable: false // Default true
                 },
                 {
                     roll: 'postRoll',
                     vastTag: './vastxmls/vastLinear_ad4.xml',
                     adText: 'Thanks for watching',
                     adTextPosition: 'top right'
                 }
             ]
         }
     }
 );



 fluidPlayer(
    'video-vpaid-ads',
     {
         vastOptions: {
             allowVPAID: true,
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
