import Layout from '../components/Layout';
import Footer from '../components/Footer';
import axios from 'axios';
export default ({sections})=>{
    return(
        <>
        <Layout Title="Workshops" Descr="Alle informatie aangaande workshops vind je hier!"/>
        {sections.map(section=>{
            return(
                <section id={section.naam} key={section.naam}>
                    {section.textfield.map(text =>{
                        return(
                            <div className="transparant2" key={text.title}>
                                <div className="info2">
                                    {text.image && <div className="fotos" >
                                        <img src={`https://wdev.be/wdev_jordi/eindwerk/assets/images/${text.image}`}/>
                                    </div> }
                                    <div className="uitleg">
                                        <h2>{text.title}</h2>
                                        <div dangerouslySetInnerHTML={{__html: text.tekst}}/>
                                        {text.link && <div className="buttons" > <a href={text.link} target="blank" className="button3">Meer info</a></div>}
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </section>
            )
        })}
        <Footer/>
        </>
    )
}

export async function getStaticProps(){
    const res = await axios.get('https://wdev.be/wdev_jordi/eindwerk/api/sections?pagina=9');
    const sectionData = res.data['hydra:member']
   
  
    return {
        props:{
           
            sections: sectionData
            
        }
    }
  }