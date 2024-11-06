import React, { useState, useEffect } from 'react'
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
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const circles = document.querySelectorAll(".circle");

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  const cursorEffect = (e) => {
    setCoords(prevState => ({...prevState, x: e.clientX}))
    setCoords(prevState => ({...prevState, y: e.clientY}))
  }

  useEffect(() => {
    animateCircles();
  })

  const animateCircles = () => {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
  
    requestAnimationFrame(animateCircles);
  }

  return (
    <BrowserRouter>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>

      <div className="bg-main py-2 sm:px-6 m-auto text-base relative flex flex-col items-center">
      {/* onMouseMove={cursorEffect} */}
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
