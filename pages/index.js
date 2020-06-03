import Link from 'next/link';

export default ()=>{
    return(
        <>
        <h1>Home</h1>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/workshops"><a>Workshops</a></Link>
        <Link href="/"><a>Home</a></Link>
        
        <section id="section-one">
            
        </section>
        <section id="section-two">
            <h2 className="wow fadeInUp">Wat doe ik?</h2>
            <div className="items">
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <span className="fa fa-pencil"></span>
                    <h3>Strips</h3>
                    <p>Ik hou mij vooral bezig met het helpen bij de uitwerking van verschillende strips, van Stam &amp; Pilou tot Amoras.</p>
                    <Link href="/portfolio"><a title="Ontdek hier meer!" className="button">Meer info</a></Link>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".6s">
                    <span className="fa fa-photo"></span>
                    <h3>Ontwerpen</h3>
                    <p>Daarnaast ontwerp ik kaartjes voor verschillende feestgelegenheden, als enkele mooie illustraties/</p>
                    <Link href="/portfolio"><a title="Ontdek hier meer!" className="button">Meer info</a></Link>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".7s">
                    <span className="fa fa-mortar-board"></span>
                    <h3>Workshops</h3>
                    <p>Ik geef les en daarnaast leid ik ook nog meerdere workshops doorheen het jaar.</p>
                    <Link href="/workshops"><a title="Ontdek hier meer!" className="button">Meer info</a></Link>
                </div>
            </div>
        </section>
        <section id="section-three">
            <h2 className="wow fadeInUp">Opkomende Evenementen</h2>
            <div className="events">
                <div className="wow fadeInUp nice" data-wow-delay=".5s">
                    <h3>Aalst Stript! September 2019</h3>
                    <p>Op zondag 8 september. Ik zal hier signeren samen met de studenten van de Syntraopleiding Stripauteur.</p>
                    

                    <a href="http://www.aalststript.be/" target="_blank" title="Ontdek hier meer!" className="button2">Meer info</a>
                </div>  
                <div className="wow fadeInUp nice" data-wow-delay=".6s">
                    
                    <h3>FACTS 2019 - Fall Edition</h3>
                    <p>Van 19 tot 20 oktober. Ik zal hier signeren samen met de studenten van de Syntraopleiding Stripauteur.</p>
                    
                    <a href="https://www.facts.be" target="_blank" title="Ontdek hier meer!" className="button2">Meer info</a>

                </div>
                <div className="wow fadeInUp nice" data-wow-delay=".7s">
                    <h3>Comic Con Brussels 2020</h3>
                    <p>Van 29 februari tot 1 maart. Ik zal hier signeren samen met de studenten van de Syntraopleiding Stripauteur.</p>
                    
                    <a href="https://comicconbrussels.com" target="_blank" title="Ontdek hier meer!" className="button2">Meer info</a>
                </div>
                              
            </div>
        </section>


        </>
    )
}