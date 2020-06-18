
import {useEffect, useRef} from 'react';

export default ({Title, Descr})=>{
    const el = useRef();
    useEffect(() => {
        $(el.current)
        console.log($(el.current))
        $(el.current).backgroundCycle({
            imageUrls: [
                'images/1.jpg',
                'images/2.jpg',
                'images/3.jpg',
                'images/4.jpg',
                'images/strip30.jpg'
            ],
            fadeSpeed: 1000,
            duration: 3000,
            backgroundSize: SCALING_MODE_COVER
        });
        return () => {
            
        }
    }, [])
    return(
        <header className="header1" ref={el}>
            <div className="transparant">
                    <a href="./" title="Ga naar de startpagina" className="logo"><img src="../images/studiotibo-logo-wit.png" alt="Studio Tibo Logo"/></a>
                    <h1 >{Title}</h1>
                    <p className="introtext">{Descr}</p>
                    <ul className="social">
                        <li><a href="https://www.facebook.com/studiotibo" title="Ga hier naar mijn Facebookkanaal!"target="_blank"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="https://www.twitter.com/studiotibo" title="Ga hier naar mijn Twitterkanaal!"target="_blank"><span className="fa fa-twitter"></span></a></li>
                        <li><a href="https://www.instagram.com/studiotibo" title="Ga hier naar mijn Instagramkanaal!"target="_blank"><span className="fa fa-instagram"></span></a></li>
                    </ul>
                    <a href="#" title="" className="pijl"><span className="fa fa-arrow-down"></span></a>
            </div>
        </header>
    )
}