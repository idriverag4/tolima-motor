import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    const navbar = document.getElementById('navbar');
    const [scrolled, SetScrolled] = useState(0)
    
    useEffect(() => {
        window.onscroll = function () {
            SetScrolled(window.scrollY)    
            if(scrolled >= 1) {
                (scrolled > 350) ? navbar.classList.remove('top') : navbar.classList.add('top')
            }        
        }
    }, [window.scrollY])

    return (
        <>
            <header className="hero">
                <div id="navbar" className="navbar top">
                    <h1 className="logo">
                        <a href="#home">
                            <span className="text-primary"><FontAwesomeIcon icon={faCar} size="1x" /> Tolima-</span>Motor's
                        </a>
                    </h1>
                    <nav>
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Nosotros</a></li>
                            <li><a href="#kitchen">Servicios</a></li>
                        </ul>
                    </nav>

                    <div className="social">
                        <ul>
                            <li><a href="https://web.facebook.com/evavic44" rel="noreferrer noopener"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/eke_tech/" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.instagram.com/eke_tech/" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <h1>Calidad y Cumplimiento</h1>
                    <p> <strong>Con nosotros, estás a un paso de tener un vehículo como nuevo !!!</strong> </p>
                </div>
            </header>
        </>
    )
}
