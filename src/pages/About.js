import React from 'react'
import photo from '../assets/Myphoto.jpg'
import '../assets/About.css';

const About = () => {
    return (
        <section id="about" className="ml-0 sm:ml-12 flex flex-col justify-center items-center">
            <h2 className="text-7xl section__title">About</h2>
            <div className="flex gap-8 w-full h-fit">
                <div className="w-58 flex justify-center">
                    <img className="w-full photo" src={photo}></img>
                </div>
                <div className="w-full flex flex-col items-start justify-between gap-5 about__content text-justify">
                    <h2 className="text-6xl">I am a <span className="text-theme-color">Full-time Front-end Developer and Freelance WordPress Developer</span> based in the Philippines.</h2>
                    <hr className="w-full"/>
                    <p className="text-md">My ultimate goal is to create memorable online experiences that not only meet but exceed user expectations. I am always excited about the opportunity to contribute my skills and expertise to help businesses enhance their digital presence and achieve their goals.</p>
                </div>
            </div>
        </section>



    )
}

export default About
