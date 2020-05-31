import Link from 'next/link';
import axios from 'axios';
import {useState} from 'react';

export default ()=>{

    const [naam, setNaam] = useState("");
    const [email, setEmail] = useState("");
    const [vragen, setVragen] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://127.0.0.1:8000/api/contacts', {
            naam: naam,
            email: email,
            vraag: vragen
          })
          .then(function (response) {
            console.log(response);
            setVragen("");
            setNaam("");
            setEmail("");
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return(
        <>
        
        <h1>Contact</h1>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/workshops"><a>Workshops</a></Link>
        <Link href="/"><a>Home</a></Link>
        
        <section id="section-four">
            <h2 className="wow fadeInUp">Waar ben ik te bereiken?</h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">Meestal kan je mij direct bereiken via mijn <a href="https://www.facebook.com/studiotibo" target="_blank" title="Ga naar mijn facebookpagina!">Facebookpagina</a>, maar indien je een bestelling wilt plaatsen kan je onderstaand contactformulier invullen en kan je zo vragen wat je maar wil. Ik zal je dan ook zo snel mogelijk terugsturen.</p>
            
            <form  className="mainform" onSubmit={handleSubmit}>
                    
                            <input type="text" name="naam" id="naam" placeholder="Naam" value={naam} onChange={e=> setNaam(e.target.value)} required />
                    
                            <input type="email" name="email" id="email" placeholder="E-Mail" value={email} onChange={e=> setEmail(e.target.value)} required />
                        
                            <textarea name="vragen" id="vragen" placeholder="Vragen..." value={vragen} onChange={e=> setVragen(e.target.value)} required></textarea>
                        
                            <input type="submit" value="Verzend bericht" />
                    
            </form>
        </section>
           
        </>
    )
}