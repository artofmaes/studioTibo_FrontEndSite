import axios from 'axios';
import {useState} from 'react';

export default () =>{

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
        <form  className="mainform" onSubmit={handleSubmit}>
                    
                            <input type="text" name="naam" id="naam" placeholder="Naam" value={naam} onChange={e=> setNaam(e.target.value)} required />
                    
                            <input type="email" name="email" id="email" placeholder="E-Mail" value={email} onChange={e=> setEmail(e.target.value)} required />
                        
                            <textarea name="vragen" id="vragen" placeholder="Vragen..." value={vragen} onChange={e=> setVragen(e.target.value)} required></textarea>
                        
                            <input type="submit" value="Verzend bericht" />
                    
        </form>
    )
}