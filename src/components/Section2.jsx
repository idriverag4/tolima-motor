import img from '../img//home/about.png'

export const Section2 = () => {
    return (
        <>
            <section class="flex-columns history">
                <div class="row">
                    <div class="column">
                        <div class="column-1" style={{marginTop:'10%'}}>
                            <img src={img} alt="" style={{width:'100%', height:'150px'}}/>
                        </div>
                    </div>

                    <div class="column">
                        <div class="column-2 bg-light">
                            <h4 class="text-secondary">Nosotros</h4>
                            <h2>Una breve historia de Tolima-Motor's</h2>
                            <p>
                                Zeitaku, founded by <span class="text-secondary"><strong>'Uzumaki Naruto'</strong></span> and the
                                <strong>'Uchiha'</strong> clan 50 years ago. These families have been in the hospitality industry ever
                                since. Although it has undergone quite a bit of modernization and upkeep over the years, the main
                                attraction, namely the Hokage molded statue and gorgeous hidden leaf village tress have remained the
                                center for it's appeal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
