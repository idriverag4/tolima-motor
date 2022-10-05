import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faMoneyCheckDollar, faFillDrip, faListCheck } from '@fortawesome/free-solid-svg-icons'

export const Section1 = () => {
    return (
        <>
            <div class="main-container">
                <section id="about" class="icons">
                    <div class="flex-items">
                        <div>
                        <i><FontAwesomeIcon icon={faHandshake}/></i> 
                            <div>
                                <h3>Calidad y Confianza</h3>
                                <p>Contamos con más de <span className="text-primary" style={{fontWeight:'900'}}>7 años</span> de experiencia. Esto nos hace tu mejor opción.</p>
                            </div>
                        </div>

                        <div>
                        <i><FontAwesomeIcon icon={faMoneyCheckDollar}/></i>
                            <div>
                                <h3>Precios Competitivos</h3>
                                <p>Nuestro principal objetivo es brindarte la mejor alternativa económica.</p>
                            </div>
                        </div>

                        <div>
                        <i><FontAwesomeIcon icon={faFillDrip}/></i>
                            <div>
                                <h3>Productos de Calidad</h3>
                                <p>Utilizamos los mejores productos del mercado para brindar excelentes resultados.</p>
                            </div>
                        </div>
                        
                        <div>
                        <i><FontAwesomeIcon icon={faListCheck}/></i>
                            <div>
                                <h3>Garantía del Servicio</h3>
                                <p>Ofrecemos total garantía de calidad en cada uno de nuestros servicios.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
