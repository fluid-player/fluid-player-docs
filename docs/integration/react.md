---
title: Using Fluid Player with React
sidebar_label: React
---

Fluid Player works with React out of the box. To start using Fluid Player in your React project, you will need to:

* install Fluid Player using Yarn or NPM as outlined [here](/docs/integration/quick-setup#integration-using-npm); and
* import Fluid Player module and attach it to video element of your choosing.

You can see an example of how to integrate Fluid Player and React in the example bellow. This is a simplified example
to get you going quickly. Follow React best practices on how to create reusable components depending on the needs
of your project.

**IMPORTANT:** switching sources dynamically is not supported. You are **required** to redraw the component OR 
to recreate the Fluid Player instance to change sources or other player configuration. 

### App.css

```css
@import "~fluid-player/src/css/fluidplayer.css";
``` 

### App.js

```jsx
import './App.css';
import React from 'react';
import fluidPlayer from 'fluid-player'

class MyVideo extends React.Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.player = null;
  }

  render() {
    return <video ref={this.self}>
      <source src='https://cdn.fluidplayer.com/videos/valerian-1080p.mkv'
              data-fluid-hd
              title='1080p'
              type='video/mp4'/>
    </video>;
  }

  componentDidMount() {
    this.player = fluidPlayer(this.self.current);
  }

  componentWillUnmount() {
    if (!!this.player) {
      this.player.destroy();
    }
  }
}

function App() {
  return (
    <div className="App">
      <MyVideo/>
    </div>
  );
}

export default App;
```
