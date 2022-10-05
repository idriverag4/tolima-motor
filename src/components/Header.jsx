import React, { Fragment } from 'react'

export const Header = () => {
    return (
        <>
            <header className="hero">
                <div id="navbar" className="navbar top">
                    <h1 className="logo">
                        <a href="#home">
                            <span className="text-primary"><i className="fas fa-car"></i> Tolima-</span>Motor's   
                        </a>
                    </h1>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#kitchen">Kitchen</a></li>
                            <li><a href="#rooms">Room</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="social">
                        <ul>
                            <li><a href="https://web.facebook.com/evavic44" rel="noreferrer noopener"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/eke_tech/" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <h1>Calidad y Cumplimiento</h1>
                    <p>Con nosotros, estás a un paso de tener un vehículo como nuevo !!!</p>
                    {/* <a href="about.html" className="btn btn-primary">
                        <i className="fas fa-chevron-right"></i> Read More
                    </a> */}
                </div>
            </header>
        </>
    )
}
