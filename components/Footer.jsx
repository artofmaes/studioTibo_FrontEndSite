import Contact2 from './Contact2'
import {useRef, useEffect} from 'react';


export default () =>{
    const footEl = useRef();
    useEffect(() => {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) {
                $(footEl.current).fadeIn();
            } else {
                $(footEl.current).fadeOut();
            }
        });
        
        //Click event to scroll to top
        $(footEl.current).click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
        return () => {
            
        }
    }, [])
   
    return(
        <>
        <footer>
            <div className="footer">
                <div><a href="./index" title="Ga naar de startpagina" className="footerlogo"><img src={`${process.env.NEXT_PUBLIC_BASE}assets/images/studiotibo-logo-wit.png`} alt="Studio Tibo Logo"/></a></div>
                <address>Tim 'Tibo' Bolssens <br/> BTW BE 0862.735.618<br/> Tel: <a href="tel:+32479885001">+32(0)479 88 50 01</a> <br/> <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#116;&#117;&#100;&#105;&#111;&#116;&#105;&#98;&#111;&#64;&#116;&#101;&#108;&#101;&#110;&#101;&#116;&#46;&#98;&#101;">&#115;&#116;&#117;&#100;&#105;&#111;&#116;&#105;&#98;&#111;&#64;&#116;&#101;&#108;&#101;&#110;&#101;&#116;&#46;&#98;&#101;</a></address>
                <Contact2/>
                </div>
            
            <p>&copy; 2019 Studio Tibo. Ontwerp door <a href="https://www.artofmaes.be" target="_blank" title="Bekijk hier de ontwerper zijn webpagina!">Art Of Maes</a>. <a href="../disclaimer/disclaimer.html" title="Bekijk hier de disclaimer">DISCLAIMER</a></p>
        </footer>
        <a href="#" className="scrollToTop" ref={footEl}>
            <span className="fa fa-arrow-up"></span>
        </a>
        </>
    )
}

