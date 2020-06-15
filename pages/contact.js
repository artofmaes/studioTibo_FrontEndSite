import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Layout from '../components/Layout';
export default ()=>{

    

    return(
        <>
       <Layout Title="Contacteer me" Descr="En plaats jouw bestelling!"/>
        {/* <Header Title="Contacteer me" Descr="En plaats jouw bestelling!"/>
        <Nav /> */}
        <section id="section-four">
            <h2 className="wow fadeInUp">Waar ben ik te bereiken?</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">Meestal kan je mij direct bereiken via mijn <a href="https://www.facebook.com/studiotibo" target="_blank" title="Ga naar mijn facebookpagina!">Facebookpagina</a>, maar indien je een bestelling wilt plaatsen kan je onderstaand contactformulier invullen en kan je zo vragen wat je maar wil. Ik zal je dan ook zo snel mogelijk terugsturen.</p>
            <Contact/>
            
        </section>

        <Footer/>
        
           
        </>
    )
}