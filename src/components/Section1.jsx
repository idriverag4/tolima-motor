import { Section1Item } from './Section1Item'
import { DataSection1 } from '../helpers/DataSection1'

export const Section1 = () => {
    return (
        <>
            <div className="main-container">
                <section id="about" className="icons">
                    <div className="flex-items">
                        {
                            DataSection1.map( ({id, icon, title, desc }) => (
                                <Section1Item key={id} icon={icon} title={title} desc={desc} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
