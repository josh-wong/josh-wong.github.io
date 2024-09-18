import React, { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css'; // Import the CSS

const Image360Viewer = ({ imageUrl }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer({
      container: viewerRef.current,
      panorama: imageUrl,
      navbar: true,  // Optional: shows the navigation bar
      defaultLat: 0, // Optional: initial vertical angle
      defaultLong: 0, // Optional: initial horizontal angle
    });

    return () => {
      viewer.destroy();
    };
  }, [imageUrl]);

  return <div ref={viewerRef} style={{ height: '500px', width: '100%' }} />;
};

export default Image360Viewer;
