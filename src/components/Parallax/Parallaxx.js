import React from 'react'
import { useInView } from 'react-intersection-observer';
import {
    useViewportScroll,
    motion,
    useTransform
} from 'framer-motion';

const Parallaxx = () => {
    const { scrollY } = useViewportScroll();
    const [ref, inView] = useInView()
    const y1 = useTransform(scrollY, [0, 100], [0, 100]);
    const y2 = useTransform(scrollY, [0, 800], [0, -900]);
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'nowrap', position: 'relative' }}>
                <motion.div>
                    <h1 className="title" style={{ color: 'red', marginLeft: '160px', lineHeight: '60px', y: y1, x: -50, position: inView ? 'fixed' : 'sticky', top: inView && '32%' }}>Launch Your<br />Custom Block Chains</h1>
                </motion.div>
                <motion.div ref={ref} style={{ width: '400px', marginLeft: inView && '600px', marginTop: '870px', alignSelf: 'flex-end', y: y2, x: 20 }}>
                    <p> What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>

                </motion.div>
            </div>
        </div>

    )
}

export default Parallaxx
