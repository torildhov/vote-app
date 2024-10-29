import { useEffect, useRef } from 'react';
import { NeatGradient } from "@firecms/neat";

function NeatBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
        colors: [
            {
                color: '#0b3954',
                enabled: true,
            },
            {
                color: '#087e8b',
                enabled: true,
            },
            {
                color: '#bfd7ea',
                enabled: true,
            },
            {
                color: '#ff5a5f',
                enabled: true,
            },
            {
                color: '#c81d25',
                enabled: true,
            },
        ],
        speed: 1,
        horizontalPressure: 4,
        verticalPressure: 3,
        waveFrequencyX: 0,
        waveFrequencyY: 0,
        waveAmplitude: 0,
        shadows: 2,
        highlights: 7,
        colorBrightness: 1,
        colorSaturation: 8,
        wireframe: false,
        colorBlending: 5,
        backgroundColor: '#FF0000',
        backgroundAlpha: 1,
        grainScale: 0,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 0,
        resolution: 0.5,
        showCredit: false
    };

    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config
    });

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      neat.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
    />
  );
}

export default NeatBackground;