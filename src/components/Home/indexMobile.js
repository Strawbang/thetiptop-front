import './mobileIndex.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import First from './second.jpg' ;
import Second from './first.jpg';

function Home() {
  const Tab = ({ children }) => {
    const { onClick } = useTabState();
  
    return onClick ? <button className="active" onClick={onClick}>{children}</button> : <button onClick={onClick}>{children}</button> ;
  };
  const Panel = ({ children }) => {
    const isActive = usePanelState();
    
    return isActive ? <p>{children}</p> : null;
  };
  return (
      <div className="boxMobileHome">
        <div className="firstPannel">
          <div className="header">
            <div className="titleBox">
              <p className="title">Le jeu concours</p>
            </div>
            <div className="subtitleBox">
              <p className="subtitle">Du 12 Octobre au 15 Novembre</p>
            </div>
            <div className="sloganBox">
            <p className="slogan">Acheter & Gagner</p>
            </div>
          </div>
          <div className="content">
            <div className="informationBox">
              <div className="informationTicket">
                <p className="information">
                  Pour tout achat supérieur à 49€<br />
                  tentez de gagner 1 an de thé gratuit
                </p>
              </div>
            </div>
            <div className="participateBox">
              <div className="participateOne">
                <p className="one">Participer et recupérer votre gain !</p>
              </div>
              <div className="participateTwo">
                <p className="two">
                  Rendez vous sur la page de participation<br />
                  et laissez vous guider. 
                </p>
              </div>
              <div className="participateThree">
                <div className="button">
                  <a href="/participate" className="three">
                    Participer 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className="secondPannel">
          <div className="header">
              <div className="titleBox2">
                <p className="title2">Comment participer ?</p>
              </div>
              <div className="subtitleBox2">
                <p className="subtitle2">8 lots différents</p>
              </div>
              <div className="sloganBox2">
              <p className="slogan2">Tirage au sort le 16 novembre</p>
              </div>
            </div>
            <div className="content">
              <div className="itemsFrame">
                <div className="itemsBox">
                  <div className="itemsBoxTitle">
                    <p className="itemTitle">
                      Liste des gains
                    </p>
                  </div>
                </div>
                <div className="items">
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">Infuseur de thé</p>
                  </div>
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">Boite de 100g d’un thé détox ou d’infusion</p>
                  </div>
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">Boite de 100g d’un thé signature</p>
                  </div>
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">Coffret découverte d’une valeur de 39€</p>
                  </div>
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">Coffret découverte d’une valeur de 69€</p>
                  </div>
                  <div className="itemBox">
                    <img className="itemImg" src="https://www.kusmitea.com/on/demandware.static/-/Sites-masterCatalog_Kusmi/default/dw2b1f111e/images/3/c/8/0/3c80f81b8e6499756b81bbecdd99e052f5c7b3dc_21685A1070.png"></img>
                    <p className="item">1 an de thé d'une valeur de 360€</p>
                  </div>
                </div>
              </div>
              <div className="buttonBox">
                <div className="button2">
                  <a href="/participate" className="button2Title">
                    Comment participer ? 
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* <Tabs>
            <div className="boxMobileTitle">
                <div className="mobileTitle_Firt">
                  <Tab>
                    <th>Le jeu-concours</th>
                  </Tab>
                </div>
                <div className="mobileTitle_Second">
                  <Tab>
                    <th>Du 12 Octobre au 15 Novembre</th>
                  </Tab>
                </div>
            </div>
            <Panel>
              <div className="boxMobileFirst">
                  <h1 className="FirstTitle">Achetez & Gagnez</h1>
                  <p className="FirstContent">Tentez votre chance en passant en caisse avec 49€ d’achats chez nos partenaires participants ! <br/><br/>
                  Tous les tickets sont 100% gagnants. Et de multiples lots sont proposés. N’hésitez pas à consulter la liste des lots, qui devrait vous plaire.<br/><br/>
                  A la fin du jeu, un tirage au sort aura lieu pour décider du gagnant d’un an de thé d’une valeur de 360€ de notre gamme thé de luxe !<br/><br/>
                  Pour plus d’informations concernant le jeu-concours, consulter le réglement pour y participer.</p>
                  <div className="butttonAction">
                    <Link to="/rules" className="howToButton">Comment participer ?</Link>
                  </div>
              </div>
            </Panel>
            <Panel>
              <div className="boxMobileSecond">
                <h2><span className="firstGreen">1 500 000</span> Lots disponibles</h2>
                <h2><span className="firstGreen">8</span> lots différents</h2>
                <h2><span className="firstGreen">1</span> Gros lot d’un valeur de 360€</h2>
                <h2><span className="firstGreen">Tirage au sort le 16 novembre</span></h2>
                <div className="butttonAction">
                  <Link to="/participate" className="participateButton">Participer</Link>
                </div>
              </div>
            </Panel>
        </Tabs> */}
      </div>
  );
}

export default Home;
