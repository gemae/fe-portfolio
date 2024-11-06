import React, { useState } from 'react';
import Tab from './Tab';
import maxForklift from '../assets/img/Maxforklift-Desktop.png';
import clicknLearn from '../assets/img/ClicknLearn-Desktop.png';
import esqGame from '../assets/img/ESQ-Game.png';
import justTank from '../assets/img/Justank-Desktop.png';
import legacyLearning from '../assets/img/LegacyLearning-Desktop.png';
import limitlessFinance from '../assets/img/LimitlessFinance-Desktop.png';
import longkingNZ from '../assets/img/LongkingNZ-Desktop.png';
import massageTherapeutics from '../assets/img/MassageTherapeutics-Desktop.png';
import naForklift from '../assets/img/NAForklift-Desktop.png';
import oraIce from '../assets/img/OraIceBath-Desktop.png';
import projectfloors from '../assets/img/Projectfloors-Desktop.png';
import theHangman from '../assets/img/Thhangman-Desktop.png';
import wegIde from '../assets/img/Wegide-desktop.png';
import dreamMachine from '../assets/img/DreamMachine-desktop.png';
import eduQuest from '../assets/img/Educational-Game.png';

const Tabs = ({ tabs }) => {
    const projects = [
        {
            title: 'Max Forklift NZ',
            details: 'A responsive website for forklift solutions, highlighting product features and specifications for industrial use. It includes intuitive navigation for easy product browsing.',
            tools: ['Wordpress', 'Elementor', 'ACF', 'JavaScript', 'PHP', 'CSS'],
            img: maxForklift,
            type: 'Wordpress',
            url: 'https://maximalforkliftsnz.co.nz/'
        },
        {
            title: 'Click n Learn',
            details: 'An e-learning platform built on WordPress, designed for interactive online language learning with a seamless user experience.',
            tools: ['Wordpress', 'Elementor', 'ACF', 'JavaScript', 'CSS'],
            img: clicknLearn,
            type: 'Wordpress',
            url: 'https://clicknlearnenglish.com/'
        },
        {
            title: 'Emoji Song Quiz',
            details: 'A fun and interactive quiz built with Alpine.js and local storage, designed as an icebreaker game for a previous company. Players guess the song titles represented by emojis, offering an engaging way to kick off team activities.',
            tools: ['Alpine JS', 'HTML', 'CSS'],
            img: esqGame,
            type: 'Frameworks',
            url: 'https://gemae.github.io/Emoji-Song-Quiz/'
        },
        {
            title: 'Just Tank',
            details: 'A clean and functional website for a tank installation service, offering easy navigation and detailed service information.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'ACF', 'SEO'],
            img: justTank,
            type: 'Wordpress',
            url: 'https://justtanks.co.nz/'
        },
        {
            title: 'Legacy Learning Org',
            details: 'A user-friendly website designed for an educational organization, providing resources, course information, and easy access to community programs.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'ACF', 'JavaScript', 'SEO'],
            img: legacyLearning,
            type: 'Wordpress',
            url: 'https://legacylearningcommunity.org/'
        },
        {
            title: 'Limitless Finance',
            details: 'Finance services site with WooCommerce and a custom-built calculator for loan estimations, focusing on functionality and responsive design.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'ACF', 'JavaScript', 'PHP', 'CSS'],
            img: limitlessFinance,
            type: 'Wordpress',
            url: 'https://limitlessfinance.co.nz/'
        },
        {
            title: 'Lonking NZ',
            details: 'Finance services site with WooCommerce and a custom-built calculator for loan estimations, focusing on functionality and responsive design.',
            tools: ['Wordpress', 'Elementor', 'ACF', 'JavaScript', 'PHP', 'CSS'],
            img: longkingNZ,
            type: 'Wordpress',
            url: 'https://lonking.nz/'
        },
        {
            title: 'Massage Therapeutics',
            details: 'A responsive static website built from Figma designs to pure HTML and CSS, tailored to a massage therapy business with a user-friendly layout and optimized for all device sizes.',
            tools: ['HTML', 'CSS'],
            img: massageTherapeutics,
            type: 'Static',
            url: 'https://gemae.github.io/Massage-Therapeutics/'
        },
        {
            title: 'NA Forklift NZ',
            details: 'A comprehensive site for North American forklifts, featuring detailed product listings and brochure downloads to support customer research.',
            tools: ['Wordpress', 'Elementor', 'ACF', 'JavaScript', 'PHP', 'CSS'],
            img: naForklift,
            type: 'Wordpress',
            url: 'https://naforklifts.co.nz/'
        },
        {
            title: 'Ora Ice Bath',
            details: 'WooCommerce site for premium ice baths, including an API for location-based features and optimized for SEO and fast loading.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'API Integration', 'JavaScript', 'PHP', 'SEO'],
            img: oraIce,
            type: 'Wordpress',
            url: 'https://oraicebaths.com/'
        },
        {
            title: 'Project Floors',
            details: 'A responsive website showcasing a flooring business, developed with a clean design and optimized user experience for browsing flooring options. Built with attention to detail for easy navigation across all devices.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'JavaScript', 'PHP'],
            img: projectfloors,
            type: 'Wordpress',
            url: 'https://projectfloors.co.nz/'
        },
        {
            title: 'The Hangman',
            details: 'A responsive website offering expert installation services, featuring easy booking, client reviews, and showcasing precision craftsmanship.',
            tools: ['Wordpress', 'Elementor', 'Woocommerce', 'JavaScript', 'CSS'],
            img: theHangman,
            type: 'Wordpress',
            url: 'https://thehangman.co.nz/'
        },
        {
            title: 'WegIde',
            details: 'A simple information website built from scratch using pure JavaScript. It features custom animations and was my first project when I started practicing vanilla JS.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            img: wegIde,
            type: 'Static',
            url: 'https://gemae.github.io/wegIde/'
        },
        {
            title: 'Dream Machine',
            details: 'A platform that enables users to add websites with Google Analytics and view their performance data in real-time. It provides tools for monitoring, managing, and analyzing website metrics, catering to admins, users, and clients alike.',
            tools: ['Vue Js', 'Node JS', 'Tailwind CSS', 'Sequalize SQL', 'Google Analytics API'],
            img: dreamMachine,
            type: 'Frameworks',
            url: 'https://gemae.github.io/wegIde/'
        },
        {
            title: 'Educational Quest',
            details: 'An educational platform built for delivering structured courses and resources. The site is designed for easy navigation, supporting both students and educators with optimized access to educational content.',
            tools: ['React Js', 'Tailwind CSS', 'Git'],
            img: eduQuest,
            type: 'Frameworks',
            url: 'https://eduquest-omega.vercel.app/'
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0].label); // Set the default active tab

    const handleTabClick = (label) => {
        setActiveTab(label);
    };

    // Filter projects based on the active tab type
    const filteredProjects = projects.filter((project) => project.type === activeTab);

    return (
        <div className="tabs-container w-full">
            <div className="tabs flex justify-start items-center gap-4 mb-12">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        onClick={() => handleTabClick(tab.label)}
                        isActive={tab.label === activeTab}
                    />
                ))}
            </div>
            <div className="tab-content grid grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => (
                    <a 
                        key={index}
                        className="tile"
                        href={project.url}
                        style={{
                            backgroundImage: `url(${project.img})`
                        }}
                    >
                        <div className="contents">
                            <h3 className="text-left text-2xl relative mb-2">{project.title}</h3>
                            <p className="mb-4">{project.details}</p>
                            <div className="tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tool">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
