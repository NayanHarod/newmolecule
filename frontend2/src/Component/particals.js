import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Margin } from '@mui/icons-material';

const ParticlesComponent = (props) => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load particles engine
    }).then(() => {
      setParticlesLoaded(true); // Set particles loaded state
    });
  }, []);

  const particlesInit = (container) => {
    console.log('Particles container initialized:', container);
    // You can perform any necessary actions upon particles initialization here
  };

  const particlesOptions = {
    background: {
      color: {
        value: '#101010',
      },
      
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 120,
        },
      },
    },
    particles: {
      color: {
        value: '#FFFFFF',
      },
      links: {
        color: '#FFFFFF',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div>
      {particlesLoaded && (
        <Particles id={props.id} options={particlesOptions} init={particlesInit} />
      )}
    </div>
  );
};

export default ParticlesComponent;
