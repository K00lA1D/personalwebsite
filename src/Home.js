import React, { useEffect, useRef } from 'react';
import Typical from 'react-typical';
import './style/Home.css';

function matrixRain(canvasRef) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split("");

  let font_size = 10;
  let columns = canvas.width / font_size;
  // Randomize the initial y positions of the drops to simulate a mid-animation start
  let drops = Array.from({length: columns}, () => Math.floor(Math.random() * canvas.height / font_size));

  function draw() {
      ctx.fillStyle = "rgba(0, 0, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${font_size}px arial`;
      for (let i = 0; i < drops.length; i++) {
          const text = symbols[Math.floor(Math.random() * symbols.length)];
          const y = drops[i] * font_size;
          let alpha = (canvas.height - y) / canvas.height;
          ctx.fillStyle = `rgba(0, 153, 255, ${Math.max(alpha, 0.05)})`;

          ctx.fillText(text, i * font_size, y);
          
          if (y > canvas.height && Math.random() > 0.975)
              drops[i] = 0;  // Reset the drop to the top

          drops[i]++;
      }
  }

  return setInterval(draw, 33);
}

const Home = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const interval = matrixRain(canvasRef);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="Home">
            <canvas ref={canvasRef} className="MatrixCanvas"></canvas>
            <div className="HeaderText">
                <Typical
                    steps={['Sid Nair', 2000, 'Computer Engineering @ UCSD', 5000]}
                    loop={Infinity}
                    wrapper="h1"
                />
            </div>
        </section>
    );
};

export default Home;
