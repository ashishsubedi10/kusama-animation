import React from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion"



const HomePage = ({ offset = 20 }) => {
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [0, offset], [1, 5]);
    const opacity = useTransform(scrollY, [0, offset], [1, 0]);
    const moveDown = useTransform(scrollY, [0, offset], [0, 10]);
    return (

        <motion.div className="container" style={{
            position: 'relative', textAlign: 'center', opacity: opacity,
            scale: scale, y: moveDown, height: '100vh', overflowX: 'hidden',
        }}>
            <img src="https://i.pinimg.com/originals/26/d2/72/26d272b42f718105a18d1025d90148f3.gif" height={400} width={400} style={{ marginTop: '100px' }} />
            <div style={{
                position: 'absolute',
                background: 'transparent',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '50px',
                color: 'red'

            }}
            >WELCOME TO NEPAL</div>
            <div style={{ marginTop: '-90px' }}>
                <button className="homepage-button" type="button">Learn More</button>
            </div>
        </motion.div>
    )
}

export default HomePage
