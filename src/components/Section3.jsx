import {DataSection3} from '../helpers/DataSection3'
import { Section3Item } from './Section3Item'

export const Section3 = () => {
    return (
        <>
            <section id="rooms" className="rooms">
                <header className="secondary-header">
                    <h4 className="text-secondary">Ya conoces nuestros servicios?</h4>
                    <h2>Servicios</h2>
                    <p>En <span className="text-secondary"><strong>Tolima-Motor's</strong></span> encontrarás la mejor atención y asesoría para mejorar la estética de tu vehículo. Somos especialistas en reparación de latas, pintura y mantenimiento automotriz en <span className="text-secondary">Facatativá</span> - Colombia.</p>
                </header>
                <div className="room">
                     {
                        DataSection3.map( ({id, image, title, list}) => (
                            <Section3Item key={id} image={image} title={title} list={list} />                                
                        ))
                     }                   
                </div>
            </section>
        </>
    )
}
