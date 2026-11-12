import { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export default function MarsGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const marsRadius = 3396190;

    const marsEllipsoid = new Cesium.Ellipsoid(
      marsRadius,
      marsRadius,
      marsRadius
    );

    const viewer = new Cesium.Viewer(containerRef.current, {
      animation: false,
      timeline: false,
      baseLayerPicker: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      infoBox: false,
      selectionIndicator: false,
      baseLayer: false,
      globe: new Cesium.Globe(marsEllipsoid),
    });

    viewer.scene.backgroundColor =
      Cesium.Color.fromCssColorString('#080b12');

    viewer.scene.globe.baseColor =
      Cesium.Color.fromCssColorString('#b65b3b');

   viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(
    0,
    0,
    marsRadius * 2
  ),
  orientation: {
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  },
});

    return () => viewer.destroy();
  }, []);

  return <div ref={containerRef} className="cesium-mars-globe" />;
}