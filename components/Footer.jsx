import Contact2 from './Contact2'



export default () =>{

   
    return(
        <>
        <footer>
            <div className="footer">
                <div><a href="./index" title="Ga naar de startpagina" className="footerlogo"><img src="../images/studiotibo-logo-wit.png" alt="Studio Tibo Logo"/></a></div>
                <address>Tim 'Tibo' Bolssens <br/> BTW BE 0862.735.618<br/> Tel: <a href="tel:+32479885001">+32(0)479 88 50 01</a> <br/> <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#116;&#117;&#100;&#105;&#111;&#116;&#105;&#98;&#111;&#64;&#116;&#101;&#108;&#101;&#110;&#101;&#116;&#46;&#98;&#101;">&#115;&#116;&#117;&#100;&#105;&#111;&#116;&#105;&#98;&#111;&#64;&#116;&#101;&#108;&#101;&#110;&#101;&#116;&#46;&#98;&#101;</a></address>
                <Contact2/>
                </div>
            
            <p>&copy; 2019 Studio Tibo. Ontwerp door <a href="https://www.artofmaes.be" target="_blank" title="Bekijk hier de ontwerper zijn webpagina!">Art Of Maes</a>. <a href="../disclaimer/disclaimer.html" title="Bekijk hier de disclaimer">DISCLAIMER</a></p>
        </footer>
        <a href="#" className="scrollToTop">
            <span className="fa fa-arrow-up"></span>
        </a>
        </>
    )
}