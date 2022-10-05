import { faHandshake, faMoneyCheckDollar, faFillDrip, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Section1Item } from './Section1Item'

const dataItem = [
    {
        icon: faHandshake,
        title: <h3>Calidad y Confianza</h3>,
        desc: <p>Contamos con más de <span className="text-primary" style={{ fontWeight: '900' }}>7 años</span> de experiencia. Esto nos hace tu mejor opción.</p>,
    },
    {
        icon: faMoneyCheckDollar,
        title: <h3>Precios Competitivos</h3>,
        desc: <p>Nuestro principal objetivo es brindarte la mejor alternativa económica.</p>,
    },
    {
        icon: faFillDrip,
        title: <h3>Productos de Calidad</h3>,
        desc: <p>Utilizamos los mejores productos del mercado para brindar excelentes resultados.</p>,
    },
    {
        icon: faListCheck,
        title: <h3>Garantía del Servicio</h3>,
        desc: <p>Ofrecemos total garantía de calidad en cada uno de nuestros servicios.</p>,
    },
]

export const Section1 = () => {
    return (
        <>
            <div class="main-container">
                <section id="about" class="icons">
                    <div class="flex-items">
                        {
                            dataItem.map(({ icon, title, desc }) => (
                                <Section1Item icon={icon} title={title} desc={desc} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
