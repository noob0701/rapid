import React from 'react'
import Section1 from '../components/Sections/Section1'
import Section2 from '../components/Sections/Section2'
import Section3 from '../components/Sections/Section3'

const Home = () => {
    return (
        <div className="container" style={{ paddingRight: "8%", paddingLeft: "8%" }}>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Home
