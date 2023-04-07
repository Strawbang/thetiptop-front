import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { consumeToken } from '../../components/Redux/reduxActionToken';
import './index.css';

const Confirmation = (props) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state);
    const [html, setHtml] = useState('');
    const history = useHistory();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const qToken = useQuery().get('token');
    const ticketNumber = useQuery().get('ticket');
    const urlParticipate = "/participate?ticket=" + ticketNumber
    useEffect(() => {
        const expr = /^[a-z0-9_-]+\.[a-z0-9_-]+\.[a-z0-9_-]+$/i;

        if(expr.test(qToken)) {
            dispatch(consumeToken(qToken));
        }
        else {
            history.push('/login');
        }
    }, []);

    useEffect(() => {
        if (token.successful) {
            setHtml(
                <Fragment>
                    <h1>Votre adresse email a bien été confirmée.</h1>
                    <p style={{textAlign: 'center'}}>Vous pouvez désormais découvrir votre gain en cliquant sur le boutton si dessous.</p>
                    <div style={{width: 100 + '%'}}>
                        <a className="particapteButton" href={urlParticipate}>Participer</a>
                    </div>
                </Fragment>
            );
        }
        else {
            if (token.error) {
                if (token.error.message === 'nonexistent_token') {
                    setHtml(
                        <Fragment>
                            <h1>Votre adresse email n'a pas pu être confirmée.</h1>
                            <p style={{textAlign: 'center'}}>Nous ne pouvons pas activer votre compte car le jeton inclus dans l'url de la page actuelle n'existe pas.</p>
                            <div style={{width: 100 + '%'}}>
                                <a className="particapteButton" href='/'>Retour</a>
                            </div>
                        </Fragment>
                    );
                }
                else if (token.error.message === 'token_already_used') {
                    setHtml(
                        <Fragment>
                            <h1>Votre adresse email a déjà été confirmée.</h1>
                            <p style={{textAlign: 'center'}}>Nous ne pouvons pas activer votre compte car le jeton inclus dans l'url de la page actuelle a déjà été utilisé. Ce qui signifie que votre compte est déjà actif.</p>
                            <div style={{width: 100 + '%'}}>
                                <a className="particapteButton" href='/'>Retour</a>
                            </div>
                        </Fragment>
                    );
                }
                else if (token.error.message === 'user_not_found') {
                    setHtml(
                        <Fragment>
                            <h1>Votre adresse email n'a pas pu être confirmée.</h1>
                            <p style={{textAlign: 'center'}}>Nous ne pouvons pas activer votre compte car le jeton inclus dans l'url de la page actuelle n'est associé à aucun utilisateur connu.</p>
                            <div style={{width: 100 + '%'}}>
                                <a className="particapteButton" href='/'>Retour</a>
                            </div>
                        </Fragment>
                    );
                }
                else if (token.error.message === 'account_already_active') {
                    setHtml(
                        <Fragment>
                            <h1>Votre adresse email est déja active.</h1>
                            <p style={{textAlign: 'center'}}>Nous n'avons pas pu activer votre compte car il est déjà activé.</p>
                            <div style={{width: 100 + '%'}}>
                                <a className="particapteButton" href='/'>Retour</a>
                            </div>
                        </Fragment>
                    );
                }
                else {
                    setHtml(
                        <Fragment>
                            <h1>Erreur critique.</h1>
                            <p>Une erreur inattendue est survenue. Veuillez rafraichir la page ou nous contacter via le <a href='/contact'>formulaire de contact</a>.</p>
                            <div style={{width: 100 + '%'}}>
                                <a className="particapteButton" href='/'>Retour</a>
                            </div>
                        </Fragment>
                    );
                }
            }
        }
    }, [token]);

    

    return(
        <div className="confirmation-container">
            <div className="notice">
                { html }
            </div>
        </div>
    );
}

export default Confirmation;