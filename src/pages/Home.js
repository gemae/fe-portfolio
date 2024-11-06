import React from 'react'
import '../assets/Home.css';

const Home = () => {
    return (
        <section id="home" className="text-center flex justify-center items-center ml-0 sm:ml-12 h-screen">
            <div className="-mt-16 flex flex-col justify-between align-center gap-3 sm:gap-5">
                <h1 className="text-4xl lg:text-8xl md:text-5xl"><span className="text-theme-color">Gerry Mae</span> Batislaong/</h1>
                <p className="text-sm md:text-3xl font-normal tracking-wider">Front-End Developer | Wordpress Developer</p>
                <div className="flex justify-evenly align-center w-40 m-auto social__icons">
                    <svg
                    viewBox="0 0 960 1000"
                    fill="currentColor"
                    height="1.7em"
                    width="1.7em"
                    // className="text-theme-color"
                    >
                    <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
                    </svg>
                     <svg
                    viewBox="0 0 960 1000"
                    fill="currentColor"
                    height="1.7em"
                    width="1.7em"
                    // className="text-theme-color"
                    >
                    <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                     </svg>
                     <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1.7em"
                    width="1.7em"
                    // className="text-theme-color"
                    >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.7em"
                    width="1.7em"
                    // className="text-theme-color"
                    >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Home
