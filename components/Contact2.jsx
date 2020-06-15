import axios from 'axios';
import {useState} from 'react';

export default () =>{

    const [naam2, setNaam2] = useState("");
    const [email2, setEmail2] = useState("");
    const [vragen2, setVragen2] = useState("");

    const handleSubmit2 = (e) => {
        e.preventDefault();
        axios.post('https://127.0.0.1:8000/api/contacts', {
            naam: naam2,
            email: email2,
            vraag: vragen2
          })
          .then(function (response) {
            console.log(response);
            setVragen2("");
            setNaam2("");
            setEmail2("");
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return(
        <form  className="mainform" onSubmit={handleSubmit2}>
                    
                            <input type="text" name="naam" id="naam" placeholder="Naam" value={naam2} onChange={e=> setNaam2(e.target.value)} required />
                    
                            <input type="email" name="email" id="email" placeholder="E-Mail" value={email2} onChange={e=> setEmail2(e.target.value)} required />
                        
                            <textarea name="vragen" id="vragen" placeholder="Vragen..." value={vragen2} onChange={e=> setVragen2(e.target.value)} required></textarea>
                        
                            <input type="submit" value="Verzend bericht" />
                    
        </form>
    )
}