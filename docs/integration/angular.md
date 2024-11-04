---
title: Using Fluid Player with Angular
sidebar_label: Angular
---

Fluid Player works with Angular out of the box. To start using Fluid Player in your Angular project, you will need to:

* install Fluid Player using Yarn or NPM as outlined [here](/docs/integration/quick-setup#integration-using-npm); and
* import Fluid Player module and attach it to video element of your choosing.

You can see an example of how to integrate Fluid Player and Angular in the example bellow. This is a simplified example
to get you going quickly. Follow Angular best practices on how to create reusable components depending on the needs
of your project.

**IMPORTANT:** switching sources dynamically is not supported. You are **required** to redraw the component OR 
to recreate the Fluid Player instance to change sources or other player configuration. 

### app.component.html

```html
<video #ref>
    <source
            src="https://cdn.fluidplayer.com/videos/valerian-1080p.mkv"
            data-fluid-hd
            title="1080p"
            type="video/mp4"
    >
</video>
```

**Note**: Safari does not support playback of .mkv files. To view this file type, consider using a different browser that supports the .mkv format.

### app.component.ts

```typescript
import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import fluidPlayer from 'fluid-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  fluidPlayer: any;

  @ViewChild('ref') ref!: ElementRef;

  ngAfterViewChecked() {
    if (!this.fluidPlayer) {
      this.fluidPlayer = fluidPlayer(this.ref.nativeElement);
    }
  }
}
```

### angular.json

Inside the `options` property:

```json
{
  ...
  "styles": [
    "src/styles.css",
    "node_modules/fluid-player/src/css/fluidplayer.css"
  ],
  ...
}
``` 
