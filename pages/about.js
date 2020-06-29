import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios'
export default ({sections, timeline})=>{
  
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
              {timeline.map(time=>{
                return(
                  <>
                    <div className="tl-item">
                      <div className="tl-bg" style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE}assets/images/${time.image})`}} ></div>
                      <div className="tl-year">
                        <p className="f2">{time.Jaar}</p>
                      </div>
                      <div className="tl-content">
                        <h1>{time.titel}</h1>
                        <p>{time.tekst}</p>
                      </div>
                    </div>
                  </>
                )
              })}
            
            </section>
        </section>
        <Footer/>
        </>
    )
}

export async function getStaticProps(){
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}sections?pagina=7`);
  const sectionData = res.data['hydra:member']
  const timeline = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}timelines`)
  const timelineData = timeline.data['hydra:member'];
  return {
      props:{
          sections: sectionData,
          timeline: timelineData
      }
  }
}