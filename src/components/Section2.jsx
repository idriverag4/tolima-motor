import img from '../img//home/about.png'

export const Section2 = () => {
    return (
        <>
            <section class="flex-columns history">
                <div class="row">
                    <div class="column">
                        <div class="column-1">
                            <img src={img} alt="" style={{width:'100%', height:'300px'}}/>
                        </div>
                    </div>

                    <div class="column">
                        <div class="column-2 bg-light">
                            <h4 class="text-secondary">Nosotros</h4>
                            <h2>Una breve historia de <span class="text-secondary">Tolima-</span>Motor's</h2>
                            <p> 
                                Fundado por <span class="text-secondary"><strong>'Miller J. Barreto'</strong></span> hace 7 años. 
                                Somos una empresa comprometida con nuestros clientes ofreciendo el mejor servicio de latonería, pintura y mantenimiento automotriz en fusagazugá.
                            </p>
                            <p>    
                                Contamos con personal especializado de amplia experiencia y trayectoria, brindamos seguridad y satisfacción al cliente debido a que implementamos 
                                repuestos y productos originales para garantizar un excelente trabajo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
