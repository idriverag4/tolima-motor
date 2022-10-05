import { Section1Item } from './Section1Item'
import { DataSection1 } from '../helpers/DataSection1'

export const Section1 = () => {
    return (
        <>
            <div class="main-container">
                <section id="about" class="icons">
                    <div class="flex-items">
                        {
                            DataSection1.map( ({ icon, title, desc }) => (
                                <Section1Item icon={icon} title={title} desc={desc} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
