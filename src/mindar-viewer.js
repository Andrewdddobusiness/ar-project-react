import React, { useEffect, useRef } from 'react';


export default () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/Andrewdddobusiness/ar-project/targets.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>

	<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/Andrewdddobusiness/ar-project/anton-1.glb"></a-asset-item>
      </a-assets>

      <a-camera id="camera" position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">

	<a-gltf-model rotation="0 0 0 " position="0 0 0.3" scale="0.505 0.505 0.505" src="#avatarModel" animation="property: position; to: 0 0.1 0.4; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
      </a-entity>
    </a-scene>
  )
}
