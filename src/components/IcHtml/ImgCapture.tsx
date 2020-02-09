import React, { useEffect, useState } from 'react';

const ImgCapture = () => {

    let photo: string = "";
    let screenshotFormat: string = "image/jpeg";

    let videoPnl: HTMLVideoElement | null;
    let _hasUserMedia: boolean = false;
    let ctx: CanvasRenderingContext2D | null;
    const [previewPicture, setPreviewPicture] = useState(photo);

    // useEffect(() => {

    //     videoPnl = document.querySelector('video');
    //     var md: MediaDevices = navigator.mediaDevices;
    //     var stream = md.getUserMedia({ video: true });
    //     md.getUserMedia({ video: true })
    //         .then((stream) => {
    //             if (videoPnl)
    //                 videoPnl.srcObject = stream;
    //             _hasUserMedia = true;
    //         }, (err) => {
    //             console.log(err);
    //         });
    // }
    // , []);

    const getCanvas = () => {

        if (videoPnl) {
            var canvas: HTMLCanvasElement = document.createElement("canvas");
            canvas.height = videoPnl.clientHeight;
            canvas.width = videoPnl.clientWidth;

            ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(videoPnl, 0, 0, canvas.width, canvas.height);
            }
            return canvas;
        }
    }

    const cameraOn = () => {
        videoPnl = document.querySelector('video');
        var md: MediaDevices = navigator.mediaDevices;
        var stream = md.getUserMedia({ video: true });
        md.getUserMedia({ video: true })
            .then((stream) => {
                if (videoPnl)
                    videoPnl.srcObject = stream;
                _hasUserMedia = true;
            }, (err) => {
                console.log(err);
            });
    }

    const takePhoto = () => {
        var canvas: HTMLCanvasElement | undefined = getCanvas();
        if (canvas) {
            photo = canvas.toDataURL(screenshotFormat);
        }
        setPreviewPicture(photo)
    }

    return (
        <div>
            <video src="src" width="width" height="height" autoPlay></video>
            <img src={previewPicture} alt="" width="width" height="height" />
            <hr />
            <button type="button" onClick={cameraOn}>Camera</button>
            <button type="button" onClick={takePhoto}>Take Photo</button>
            <hr />
        </div>
    );
}

export default ImgCapture;