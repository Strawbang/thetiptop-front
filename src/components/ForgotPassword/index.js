import { Button, Icon, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function ForgotPassword(props){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email
        }
    }
  }
    return(
        <div className="boxPassword">
          <div className="titleFramePassword">
            <h1 className="titlePassword">Mot de passe oublié</h1>
          </div>
          <form  onSubmit={handleSubmit}>
            <div className="boxPasswordForm">
              <div className="passwordForm">
                <label style={{textAlign: "-webkit-center"}}>
                  Email:
                  <input
                  name="email"
                  type="email"
                  className="passwordField"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete='email'
                  required />
                </label>
              </div>
              <div className="passwordSubmitForm">
                <Button type="submit" variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>
                  Valider
                </Button>
              </div>
            </div>
          </form>
        </div>
    );
}

export default ForgotPassword;