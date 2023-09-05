import React, { useState } from "react";
import "./VideoUpload.css";

export default function VideoUpload() {
  const [hasAudioTrack, setHasAudioTrack] = useState<string>("N/A");
  const [uploadLabel, setUploadLabel] = useState<string>(
    "Click here to upload"
  );
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);

  let mediaRecorder: MediaRecorder;
  function hasAudio(video: any) {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks?.length)
    );
  }
  function hasVideoGotAudio(src: any) {
    const video = document.createElement("video");
    video.muted = true;
    video.crossOrigin = "anonymous";
    video.preload = "auto";
    return new Promise((resolve, reject) => {
      video.addEventListener("error", reject);
      video.addEventListener(
        "canplay",
        () => {
          video.currentTime = 0.99;
        },
        { once: true }
      ); // Important because 'canplay' can be fired hundreds of times.;
      video.addEventListener("seeked", () => resolve(hasAudio(video)), {
        once: true,
      });
      video.src = src;
    });
  }

  const handldleFileUpload = (e: any) => {
    console.log(e.target.files[0]);
    setHasAudioTrack("Checking...");
    let file = e.target.files[0];
    if (file) {
      setUploadLabel(file.name);
      setFileUploaded(true);
    } else {
      setUploadLabel("Click here to upload");
      setFileUploaded(false);
      setHasAudioTrack("N/A");
      return;
    }
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = async (e: any) => {
      //   console.log("url : ", fileReader.result);
      const response = await hasVideoGotAudio(fileReader.result);
      console.log("response : ", response);
      if (response) {
        setHasAudioTrack("True");
      } else {
        setHasAudioTrack("False");
      }
    };
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 240,
          height: 240,
          facingMode: "user",
        },
      })
      .then((stream) => {
        const video = document.getElementById(
          "video-player"
        ) as HTMLVideoElement;
        video.srcObject = stream;
        video.muted = true;
        video.play();
        video.addEventListener("loadeddata", () => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (e) => {
            console.log("data : ", e.data);
          };
        });
      });
  };

  const startRecording = () => {
    mediaRecorder.start();
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  return (
    <div className="video-upload">
      <div style={{ width: "100%" }}>
        <video
          style={{ transform: "rotateY(180deg)" }}
          id="video-player"
        ></video>
      </div>
      <div>
        <button onClick={startVideo}>Play Video</button>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
      </div>
      <div
        className={`validate-audio-cntnr ${
          fileUploaded ? "uploaded" : "not-uploaded"
        }`}
      >
        <div style={{ width: "100%" }}>
          <input id="file-upload" type="file" onChange={handldleFileUpload} />
          <label htmlFor="file-upload">{uploadLabel}</label>
        </div>
        <p>Has Audio : {hasAudioTrack}</p>
      </div>
    </div>
  );
}
