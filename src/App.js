import React, { useState, useEffect } from 'react';
import './App.css';
import './style/component.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Skills';
import Projects from './pages/Works';
import Contact from './pages/Contact';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isOnClickable, setIsOnClickable] = useState(false);
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
  });

  const cursorEffect = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
    setIsMoving(true);

    // Check if the cursor is over a clickable element and set the opacity state
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element && (element.tagName === 'A' || element.tagName === 'BUTTON' || element.onclick || element.getAttribute('role') === 'button')) {
      setIsOnClickable(true);
    } else {
      setIsOnClickable(false);
    }
  };

  useEffect(() => {
    let moveTimeout;

    const animateCircles = () => {
      let { x, y } = coords;

      circles.forEach((circle, index) => {
        if (circle) {
          circle.style.left = x - 12 + 'px';
          circle.style.top = y - 12 + 'px';
          circle.style.scale = (circles.length - index) / circles.length;

          // Adjust the animation speed when the cursor stops moving
          const speed = isMoving ? 0.2 : 0.05;

          // Change opacity if hovering over a clickable element
          circle.style.opacity = isOnClickable ? 0.05 : 1;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * speed;
          y += (nextCircle.y - y) * speed;

          circle.x = x;
          circle.y = y;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Stop movement after a brief period when the mouse is not moving
    moveTimeout = setTimeout(() => {
      setIsMoving(false);
    }, 100);

    return () => clearTimeout(moveTimeout);
  }, [coords, isMoving, isOnClickable]);

  return (
    <BrowserRouter>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="circle"></div>
      ))}

      <div
        className="bg-main py-2 sm:px-6 m-auto text-base relative flex flex-col items-center"
        onMouseMove={cursorEffect}
      >
        <Header />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
