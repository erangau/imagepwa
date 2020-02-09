import React, {useEffect, useState } from 'react';

export default class IcHtml extends React.Component {

    render () {
        return (
          <div>
            <h3>Html5</h3>
            {/* <input type="file" accept="image/*" />
            <input type="file" accept="image/*" capture="camera" />
            <input type="file" accept="video/*;capture=camcorder" /> */}
            <video id="video" width="640" height="480"></video>
            <button id="snap">Snap Photo</button>
            <canvas id="canvas" width="640" height="480"></canvas>
          </div>
        );
      }
    }