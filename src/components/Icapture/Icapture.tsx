import * as React from 'react';

export default class Icapture extends React.Component {

  
  captureImage = () => {
    const canvaspanel: HTMLCanvasElement|null|undefined = document.querySelector('canvas');
    const video : HTMLVideoElement|null = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({
        video: true
      }).then ()
      if (canvaspanel && video) {
        canvaspanel.width = video.videoWidth;
        canvaspanel.height = video.videoHeight;
        if (canvaspanel.getContext('2d') !=undefined) {
        }
      }
  };

  captureVideo = () => {
    const el: HTMLVideoElement|null = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(function(stream) {
      if (el) {
        el.srcObject = stream;
      }
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });
  };

  takepicture() {

  }

  render () {
    return (
      <div>
        <h3>Navigator</h3>
        <canvas id="canvas" width="640" height="480"></canvas>
        <video autoPlay width="640" height="480"></video>
        <button onClick={this.captureImage}>Take a Photo</button>
        <button onClick={this.captureVideo}>Take a Video</button>
      </div>
    );
  }
}