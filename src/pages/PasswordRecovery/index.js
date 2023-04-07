import Frame from '../../components/Frame';
import PasswordRecovery from '../../components/PasswordRecovery';
import Fond from './fondPasswordRecovery.png' 
function App() {
    return (
      <div style={{height: 100 + "%"}}>
        <Frame image={Fond} content={<PasswordRecovery></PasswordRecovery>}></Frame>
      </div>
    );
}

export default App;
