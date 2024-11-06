import React from 'react'
import '../assets/Skills.css';
import Button from '../components/Button';

const Experience = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <section id="skills" className="flex items-center justify-center">
            <h2 className="text-7xl section__title">Skills</h2>
            <div className=" h-full flex flex-col items-center justify-center relative">
                <div className="w-full flex flex-col gap-12">
                    <div className="flex text-center gap-24">
                        <div className="w-1/2  text-left">
                            <h3 className="text-2xl mb-4 text-left">Frontend Web Development</h3>
                            <p>Expertise in HTML, CSS, SCSS, and Tailwind CSS, with a strong focus on creating responsive, mobile-friendly designs. I ensure that all websites I build are optimized for a seamless experience on devices of all sizes.</p>
                        </div>
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">JavaScript and Modern Frameworks</h3>
                            <p>Proficient in JavaScript, with hands-on experience using Alpine.js and Vue.js for building interactive and dynamic web applications. I also have a working knowledge of React.js, enabling me to work on modern single-page applications.</p>
                        </div>
                    </div>
                    <div className="flex text-center gap-24">
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">WordPress Development</h3>
                            <p>Extensive experience as a WordPress freelancer, specializing in building and customizing WordPress sites with Elementor, WordPress API integration, and custom coding solutions for unique client needs.</p>
                        </div>
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">E-commerce Expertise with WooCommerce</h3>
                            <p>Skilled in WooCommerce setup, customization, and optimization, ensuring seamless user experiences and high-performing online stores.</p>
                        </div>
                    </div>
                    <div className="flex text-center gap-24">
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">SEO Optimization</h3>
                            <p>Knowledgeable in implementing SEO best practices, ensuring websites are optimized for search engine ranking, driving more organic traffic to sites.</p>
                        </div>
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">Advanced Custom Fields (ACF)</h3>
                            <p>Proficient in utilizing ACF for building highly customizable WordPress websites, providing flexibility and ease of content management for clients.</p>
                        </div>
                    </div>
                    <div className="flex text-center gap-24">
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">Website Performance Optimization</h3>
                            <p>To improve user experience and reach wider audience, My layouts will work on any device, big or small</p>
                        </div>
                        <div className="w-1/2 text-left">
                            <h3 className="text-2xl mb-4">Server-Side Knowledge</h3>
                            <p>Basic understanding of server-side development, with experience in Next.js, allowing me to work with server-side rendering and static site generation for improved SEO and performance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button 
                label="Full CV" 
                onClick={handleClick} 
                style={{ backgroundColor: 'none' }}
            />
        </section>
    )
}

export default Experience
