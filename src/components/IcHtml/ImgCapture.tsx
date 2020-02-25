import React, { useEffect, useState } from 'react';

const ImgCapture = () => {

    let photo: string = "";
    let screenshotFormat: string = "image/jpeg";

    let videoPnl: HTMLVideoElement | null;
    let ctx: CanvasRenderingContext2D | null;
    const [previewPicture, setPreviewPicture] = useState(photo);

    const constraints = {
        video: true,
    };

    const cameraOn = () => {
        videoPnl = document.querySelector('video');
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                if (videoPnl) {
                    videoPnl.srcObject = stream;
                }
            });
    }

    const takePhoto = () => {
        videoPnl = document.querySelector('video');
        let canvas = document.querySelector('canvas');
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context && videoPnl)
                context.drawImage(videoPnl, 0, 0, canvas.width, canvas.height);
        }
    }

    const saveImage = () => {
        let canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.toBlob(function (blob) {
            }, 'image/wbmp');
        }
    }

    return (
        <div>
            <video id="player" width="320" height="240" autoPlay></video>
            <img src={previewPicture} alt="" width="width" height="height" />
            <canvas id="canvas" width="320" height="240"></canvas>
            <hr />
            <button type="button" onClick={cameraOn}>Camera On</button>
            <button type="button" onClick={takePhoto}>Take Photo</button>
            <hr />
        </div>
    );
}

export default ImgCapture;