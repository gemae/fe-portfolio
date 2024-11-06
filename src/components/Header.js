import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/Logo.png';
import '../assets/Header.css';


const Header = () => {
    
    let location = [
        {
            name: 'home',
            active: true
        },
        {
            name: 'about',
            active: false
         },
         {
            name: 'skills',
            active: false
         },
         {
            name: 'works',
            active: false
         },
         {
            name: 'contact',
            active: false
         }
    ]
    // const locLength = location.length
    // const [elRefs, setElRefs] = useState([]);
    const [toggle, setToggle] = useState(true)
    const [isDesktop, setDesktop] = useState(true);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth >= 767 ) {
                setDesktop(true)
                setToggle(true)
            } else {
                setDesktop(false)
                setToggle(false)
            }
        };
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('load', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('load', handleWindowResize);
        };
    });

    const newTheme = (color, bg) => {
        console.log('theme is running...')
        document.querySelector(':root').style.setProperty('--theme-color', color)
        document.querySelector(':root').style.setProperty('--theme-bg', bg)
    }

    return (
        <>
        <header className="fixed justify-between w-full sm:w-auto box-border pt-2 sm:pt-0 -mt-2 sm:mt-0">
            <div className="flex items-center sm:block order-2 header__right">
                <div className="float-right text-center w-fit color__picker mobile order-2 sm:order-none sm:mr-0 mr-4">
                    <button className="bg-pink w-4 h-4 rounded-full block cursor-pointer" onClick={() => newTheme('rgb(223 146 146)','rgb(238 231 225)')}></button>
                    <button className="bg-brown w-4 h-4 rounded-full block cursor-pointer" onClick={() => newTheme('rgb(178 129 101)','rgb(238 231 225)')}></button>
                    <button className="bg-green w-4 h-4 rounded-full block cursor-pointer" onClick={() => newTheme('rgb(56 128 135)','rgb(246 246 242)')}></button>
                
                </div>
                <div className="order-3 sm:order-none pb-10 flex justify-center logo__image"><Link to="#home" smooth><img className="w-12" src={logo} alt="Logo"/></Link></div>
            </div>
            <nav className="order-1">
                <ul>
                    <li className="capitalize mb-0 sm:mb-7 mr-2 sm:mr-0">
                        <Link to="#home" smooth>
                            Home
                        </Link>
                    </li>
                        <button onClick={() => setToggle(!toggle)}>
                        {
                            toggle ?
                            <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height=".8em"
                            width=".8em"
                            >
                            <path
                                fillRule="evenodd"
                                d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                            />
                            </svg>
                            :
                            !isDesktop ?
                            <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height=".8em"
                            width=".8em"
                            >
                            <path
                                fillRule="evenodd"
                                d="M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z"
                            />
                            </svg> :
                            <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height=".8em"
                            width=".8em"
                            >
                            <path
                              fillRule="evenodd"
                              d="M7.646 2.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 3.707 2.354 9.354a.5.5 0 11-.708-.708l6-6z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M7.646 6.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 7.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                            />
                          </svg>
                        }
                        </button>
                    <ul className={`pt-0 sm:pt-6 overflow-hidden transition-all duration-500 ease-linear ${isDesktop ? !toggle ? 'h-0' : 'h-screen' : !toggle ? 'h-0' : 'nav__wrapper'} `}>
                        {
                            location.map((loc, index) =>
                                loc.active != true ?
                                <li key={index} className={`uppercase ${index === 1 && 'pr-12'} text-main-color`}>
                                    <Link to={`#${loc.name}`} smooth>
                                        {loc.name}
                                    </Link>
                                </li>
                                :
                                null
                            )
                        }
                    </ul>                   
                </ul>
            </nav>
        </header>
        <div className="float-right text-center w-fit color__picker desktop">
            <button className="bg-pink w-4 h-4 rounded-full mb-8 block cursor-pointer" onClick={() => newTheme('rgb(223 146 146)','rgb(238 231 225)')}></button>
            <button className="bg-brown w-4 h-4 rounded-full mb-8 block cursor-pointer" onClick={() => newTheme('rgb(178 129 101)','rgb(238 231 225)')}></button>
            <button className="bg-green w-4 h-4 rounded-full mb-8 block cursor-pointer" onClick={() => newTheme('rgb(56 128 135)','rgb(246 246 242)')}></button>
        </div>
        </>
    )
}

export default Header
