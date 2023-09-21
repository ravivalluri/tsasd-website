import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  const isClient = typeof window === 'object'; // Check if the window object is available

  const [windowDimensions, setWindowDimensions] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!isClient) {
      return; // Exit early if not running in a client (browser) environment
    }

    // Function to update the window dimensions
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add an event listener to update dimensions when the window is resized
    window.addEventListener('resize', handleResize);

    // Initial dimensions setup
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]); // Add isClient as a dependency

  return windowDimensions;
}
