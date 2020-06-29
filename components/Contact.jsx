import axios from 'axios';
import {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default () =>{

    const [naam, setNaam] = useState("");
    const [email, setEmail] = useState("");
    const [vragen, setVragen] = useState("");
    const [feedback, setFeedback] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}contacts`, {
            naam: naam,
            email: email,
            vraag: vragen
          })
          .then(function (response) {
            setFeedback(true);
            setVragen("");
            setNaam("");
            setEmail("");
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setFeedback(false);
    };

    return(
      <>
        <form  className="mainform" onSubmit={handleSubmit}>
                    
          <input type="text" name="naam" id="naam" placeholder="Naam" value={naam} onChange={e=> setNaam(e.target.value)} required />
  
          <input type="email" name="email" id="email" placeholder="E-Mail" value={email} onChange={e=> setEmail(e.target.value)} required />
      
          <textarea name="vragen" id="vragen" placeholder="Vragen..." value={vragen} onChange={e=> setVragen(e.target.value)} required></textarea>
      
          <input type="submit" value="Verzend bericht" />
                    
        </form>
        <Snackbar open={feedback} autoHideDuration={6000} onClose={handleClose} style={{width: "1000px"}}>
          <MuiAlert onClose={handleClose} severity="success">
              Tibo is gecontacteerd!
          </MuiAlert>
        </Snackbar>
      </>
    )
}