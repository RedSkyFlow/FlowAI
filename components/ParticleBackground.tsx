import React, { useState, useMemo, useEffect } from 'react';
// FIX: Updated tsparticles imports to use the correct v2 packages to resolve type conflicts.
// The component was using v2 options syntax but importing v1 packages, causing a type mismatch.
// FIX: Refactored to use tsparticles v3 API with initParticlesEngine to resolve 'init' prop error.
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

// Helper function to convert HSL string from CSS variables to a HEX string
const hslToHex = (hslStr: string) => {
  if (!hslStr) return '#ffffff';
  try {
    let [h, s, l] = hslStr.split(' ').map(val => parseFloat(val));
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) { [r, g, b] = [c, x, 0]; }
    else if (60 <= h && h < 120) { [r, g, b] = [x, c, 0]; }
    else if (120 <= h && h < 180) { [r, g, b] = [0, c, x]; }
    else if (180 <= h && h < 240) { [r, g, b] = [0, x, c]; }
    else if (240 <= h && h < 300) { [r, g, b] = [x, 0, c]; }
    else if (300 <= h && h < 360) { [r, g, b] = [c, 0, x]; }

    const toHex = (cVal: number) => {
      const hex = Math.round((cVal + m) * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  } catch (e) {
    console.error("Could not parse HSL color:", hslStr, e);
    return '#ffffff';
  }
};

const ParticleBackground: React.FC = () => {
    // Initialize state to null to indicate that colors haven't been loaded yet.
    const [particleColors, setParticleColors] = useState<string[] | null>(null);
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    
    // FIX: Use a standard useEffect hook to perform the side effect of reading DOM properties.
    // This runs once after the component mounts, which is the correct and safe lifecycle point for this operation.
    useEffect(() => {
        // We only proceed if the engine is initialized.
        if (!init) return;

        const computedStyle = getComputedStyle(document.documentElement);
        const primary = hslToHex(computedStyle.getPropertyValue('--primary').trim());
        const secondary = hslToHex(computedStyle.getPropertyValue('--secondary').trim());
        const accent = hslToHex(computedStyle.getPropertyValue('--accent').trim());
        setParticleColors([primary, secondary, accent]);
    }, [init]); // This effect is now dependent on the engine being initialized.


    const options = useMemo(() => {
        // Ensure options are only generated when particleColors is available.
        if (!particleColors) return {};
        
        return {
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: false,
                    },
                    onClick: {
                        enable: false,
                    },
                },
            },
            particles: {
                color: {
                    value: particleColors,
                },
                links: {
                    enable: false,
                },
                move: {
                    enable: true,
                    speed: 0.4,
                    direction: "none" as const,
                    outModes: {
                        default: "out" as const,
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 150,
                },
                opacity: {
                    value: { min: 0.1, max: 0.6 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                        startValue: "random" as const,
                    },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 0.5, max: 1.5 },
                     animation: {
                        enable: true,
                        speed: 0.8,
                        sync: false,
                        startValue: "random" as const,
                    },
                },
            },
            detectRetina: true,
        };
    }, [particleColors]);
    
    // Only render the Particles component once the colors have been loaded and the engine is initialized.
    if (!init || !particleColors) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -10,
                pointerEvents: 'none'
            }}
        />
    );
};

export default ParticleBackground;
