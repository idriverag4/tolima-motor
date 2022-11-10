import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Element } from "react-scroll";


export const TolimaMotor = () => {
    return (
        <>
            <Element name="Header">   <Header/>   </Element>            
            <Element name="Section1"> <Section1/> </Element>            
            <Element name="Section2"> <Section2/> </Element>            
            <Element name="Section3"> <Section3/> </Element>            
            <Footer/>
        </>
    )
}
