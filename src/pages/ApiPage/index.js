import React from 'react';
import Sidebar from './components/Sidebar';
import EndpointDescription from './components/EndpointDescription';
import Request from './components/Request';
import Response from './components/Response';
import Footer from '../../components/Footer';

import Endpoints from './Endpoints';

const res = `{
    "status": true,
    "result_code": 200,
    "message": "Success!",
    "values": {
      "name": "Kiddy",
      "email": "kiddydhana@gmail.com",
      "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
      "account_status": "1"
      }
    }`;

export default function ApiPage(){ 
  const [activeEndpoint,setActiveEndpoint] = React.useState(Endpoints[0].endpoints[0]);
    return(
        <div id="wrapper">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="brand">
            <a href="/"><img src="./assets/img/logo-dark.png" alt="Klorofil Logo" className="img-responsive logo"/></a>
          </div>
          <div className="container-fluid">
            <div className="navbar-btn">
              <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"/>
              </button>
            </div>
          </div>
        </nav>
        
        <Sidebar endpoints={Endpoints} setActive={setActiveEndpoint}/>

        <div className="main">
          <div className="main-content">
            <div className="container-fluid">
              <EndpointDescription title={activeEndpoint.name} description={activeEndpoint.description}/>
              <div className="row">
                <Request request={activeEndpoint.request}/>
                <Response res={activeEndpoint.response}/>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"/>
        <Footer/>
      </div>
    );
}