import axios from 'axios';
import {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default () =>{

    const [naam2, setNaam2] = useState("");
    const [email2, setEmail2] = useState("");
    const [vragen2, setVragen2] = useState("");
    const [feedback2, setFeedback2] = useState(false);

    const handleSubmit2 = (e) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}contacts`, {
            naam: naam2,
            email: email2,
            vraag: vragen2
          })
          .then(function () {
            setFeedback2(true)
            setVragen2("");
            setNaam2("");
            setEmail2("");
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    const handleClose2 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setFeedback2(false);
    };
    return(
      <>
        <form  className="mainform" onSubmit={handleSubmit2}>
                    
                            <input type="text" name="naam" id="naam" placeholder="Naam" value={naam2} onChange={e=> setNaam2(e.target.value)} required />
                    
                            <input type="email" name="email" id="email" placeholder="E-Mail" value={email2} onChange={e=> setEmail2(e.target.value)} required />
                        
                            <textarea name="vragen" id="vragen" placeholder="Vragen..." value={vragen2} onChange={e=> setVragen2(e.target.value)} required></textarea>
                        
                            <input type="submit" value="Verzend bericht" />
                    
        </form>
        <Snackbar open={feedback2} autoHideDuration={6000} onClose={handleClose2} style={{width: "1000px"}}>
          <MuiAlert onClose={handleClose2} severity="success">
              Tibo is gecontacteerd!
          </MuiAlert>
        </Snackbar>
      </>
    )
}