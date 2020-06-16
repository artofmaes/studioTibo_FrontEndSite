import Layout from '../components/Layout';
import Footer from '../components/Footer';
export default ()=>{
    return(
        <>
        <Layout Title="Tibo's Portfolio" Descr="En zijn fantastische werken!"/>
        <section id="section-eleven">
          <h2>Mijn collecties!</h2>
          <p className="introtekstje">Wil je weten wat ik in petto heb? klik dan gauw op deze categorieën om al mijn werkjes te bekijken!</p>
           
        </section>
        <Footer/>
        </>
    )
}