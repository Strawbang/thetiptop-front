import './index.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
function Logo() {
    return (
        <div className="boxLogo">
            <a href="/">
                <img className="logo" alt="logo de thé tip top" src={logo}/>
            </a>
        </div>
    );
}

export default Logo;
