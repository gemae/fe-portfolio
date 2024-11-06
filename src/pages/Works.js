import React from 'react'
import '../assets/Works.css'

import Tabs from '../components/Tabs'

const Works = () => {
    const tabData = [
        {label: "Wordpress"},
        {label: "Frameworks"},
        {label: "Static"},
    ]
    return (
        <section id="works">
            <h2 className="text-7xl section__title">Works</h2>
            <div className="h-full flex flex-col items-center justify-start relative mt-28">
                <div className="w-full">
                    <Tabs tabs={tabData}/>
                </div>
            </div>
        </section>
    )
}

export default Works
