import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios'
export default ({sections})=>{
  
    return(
        <>
        <Layout Title="Over Tibo" Descr="En zijn avonturen!"/>
        {sections.map(section =>{
          return(
            <section id={section.naam} key={section.naam}>
              {section.textfield.map(text=>{
                return(
                  <>
                  <div className="logootje blokje" key={text.id}>
                    <img src={`${process.env.NEXT_PUBLIC_BASE}assets/images/${text.image}`} alt="Tim Bolssens"/>
                  </div>
                  <div className="blokje" key={text.id}>
                    <h2>{text.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: text.tekst}}/>
                  </div>
                  </>
                )
              })}
            </section>
          )
        })}        
        <section id="section-six">
           <h2>Mijn Tijdlijn</h2>
            <section id="timeline">
  
            <div className="tl-item" >

                <div className="tl-bg" style={{backgroundImage:'url(../images/gag1.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2000</p>
                </div>

                <div className="tl-content">
                  <h1>De Eerste Cartoon</h1>
                  <p>Een eerste eigen creatie dat ik maakte voor de reeks Grappen &amp; Grollen. Deze one page lanceerde mijn carrière in de wereld van het striptekenen.</p>
                </div>

              </div>
            <div className="tl-item" >

                <div className="tl-bg" style={{backgroundImage:'url(../images/2.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2002</p>
                </div>

                <div className="tl-content">
                  <h1>De Eerste Les</h1>
                  <p>In 2002 ben ik in de wereld van de school gestapt door als lesgever te starten voor de Magie Art Promo vzw. Deze tekenateliers zijn voor kinderen en jongeren.</p>
                </div>

              </div>
            <div className="tl-item" >

                <div className="tl-bg" style={{backgroundImage:'url(../images/logokleur.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2003</p>
                </div>

                <div className="tl-content">
                  <h1>De oprichting van Studio Tibo</h1>
                  <p>In Oktober besloot ik om mezelf op de kaart te zetten als zelfstandige door Studio Tibo op te richten. Hiermee kon ik op basis van Freelance vele andere jobs op mijn vork steken.</p>
                </div>

              </div>
            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage:'url(../images/max.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2004</p>
                </div>

                <div className="tl-content">
                  <h1>Een lange samenwerking</h1>
                  <p>Sinds 2004 tot 2011 werkte ik samen met Studio MAX!, die instond voor zowel de Stam &amp; Pilou als de Kamiel Spiessens strips. Onder hen heb ik enorm veel bijgeleerd.</p>
                </div>

              </div>
            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage:'url(../images/kamp.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2005</p>
                </div>

                <div className="tl-content">
                  <h1>Een leven als monitor</h1>
                  <p>Sinds 2005 werd mij de job aangeboden om als lesgever/monitor aan de slag te gaan bij Sporta. Dit voor de striptekenkampen. 15 jaar lang kon men elke zomer op mij rekenen, en heb daar ook veel jongeren iets bij kunnen leren over de wondere wereld van strips.</p>
                </div>

              </div>
            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage:'url(../images/syntra.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2">2008</p>
                </div>

                <div className="tl-content">
                  <h1>Syntra</h1>
                  <p>Sinds September 2008 ben ik aan de slag gegaan bij Syntra (een opleidingcentrum) als docent Stripauteur. In deze opleiding leer ik volwassenen jong en oud alle kneepjes van de wereld van de strip. Eerst in Brussel, daarna in Aalst om uiteindelijk terug te belanden in Brussel.</p>
                </div>

              </div>
            <div className="tl-item">

                <div className="tl-bg"  style={{backgroundImage:'url(../images/strip31.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2009</p>
                </div>

                <div className="tl-content">
                  <h1>De individuele werker</h1>
                  <p>Na vele jaren vaste werkkracht te zijn bij Studio MAX! was het tijd om op zelfstandige basis aan bepaalde projecten mee te helpen. Zo heb ik geholpen aan 'De Reizen van Alex', wat mij dan nog meer op de kaart zette.</p>
                </div>

              </div>
            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage:'url(../images/lien.jpg)'}}></div>

                <div className="tl-year">
                  <p className="f2 heading--sanSerif">2013</p>
                </div>

                <div className="tl-content">
                  <h1>De zelfstandige</h1>
                  <p>Sinds het einde van Studio MAX! ben ik zelf nieuwe oorden gaan opzoeken, en heb ik enkele fantastische illustraties mogen maken voor het magazine Menzo en mocht ik zelf een mascotte ontwerpen voor Sporta's nieuwe zomerbrochure van dat jaar.</p>
                </div>  
              </div>
            <div className="tl-item">

                <div className="tl-bg" style={{backgroundImage:'url(../images/3.jpg)'}} ></div>

                <div className="tl-year">
                  <p className="f2">HEDEN</p>
                </div>

                <div className="tl-content">
                  <h1 className="f3">Werken zonder stoppen</h1>
                  <p>Vandaag de dag werk ik elke dag van 's morgens vroeg tot 's avonds laat. Zowel kleine projecten (geboorte-, huwelijks-, verjaardagskaartjes) als grote projecten (Amoras, Pinanti, Jump, etc.) komen elke dag aan bod. Slapen doe ik pas wanneer de laatste plaat is verstuurd naar de klant. Lang leve koffie!</p>
                </div>

              </div>
            </section>
        </section>
        <Footer/>
        </>
    )
}

export async function getStaticProps(){
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}sections?pagina=7`);
  const sectionData = res.data['hydra:member']
  return {
      props:{
          sections: sectionData
      }
  }
}