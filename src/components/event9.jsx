/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import "./camera.css";

function event9() {
  const sceneRef = useRef(null);
  const [checkPoint9, setCheckPoint9] = useState(false);
  const [local, setLocal] = useState();
  const sendCheck = process.env.REACT_APP_CHECK_POST;

  useEffect(() => {
    const myUid = localStorage.getItem("myUid");
    if (myUid) {
      setLocal(myUid);
    }
  }, []);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];

    sceneEl.addEventListener("targetFound", (event) => {
      setCheckPoint9(true);

      console.log("ok");

      if (setCheckPoint9) {
        axios
          .patch(
            `${sendCheck}/checkpoints/${localStorage
              .getItem("myUid")
              .replaceAll('"', "")}`,
            {
              checkpoint9: true,
            }
          )
          .then((res) => {
            if (setCheckPoint9) {
              console.log("start");
              window.location = "/suscess/Cherilon";
            }
          });
      }
    });

    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
    return () => {
      arSystem.stop();
    };
  }, []);

  return (
    <div className="camera">
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: https://res.cloudinary.com/flook-dev/raw/upload/v1656403306/AR/ar9_t1iyqf.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0"
            width="0"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default event9;
