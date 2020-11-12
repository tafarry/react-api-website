import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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

        <div id="sidebar-nav" className="sidebar">
          <div className="sidebar-scroll">
            <nav>
              <ul className="nav">
                <li><a href="#" className=""><i className="lnr lnr-home"/> <span>Dashboard</span></a></li>
                <li>
                  <a href="#subPages" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages2" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 2</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages2" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages3" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 3</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages3" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages4" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 4</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages4" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages5" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 5</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages5" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages6" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 6</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages6" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages7" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 7</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages7" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages8" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 8</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages8" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages9" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 9</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages9" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages10" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 10</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages10" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages11" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 11</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages11" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages12" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 12</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages12" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#subPages13" data-toggle="collapse" className="collapsed">
                    <i className="lnr lnr-file-empty"/>
                    <span>Token 13</span>
                    <i className="icon-submenu lnr lnr-chevron-left"/>
                  </a>
                  <div id="subPages13" className="collapse ">
                    <ul className="nav">
                      <li><a href="#" className="">Check Token &nbsp; <span className="label label-success">GET</span></a></li>
                      <li><a href="#" className="">Generate Token &nbsp; <span className="label label-primary">POST</span></a></li>
                      <li><a href="#" className="">Refresh Token &nbsp; <span className="label label-warning">PUT</span></a></li>
                      <li><a href="#" className="">Delete Token &nbsp; <span className="label label-danger">DELETE</span></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="main">
          <div className="main-content">
            <div className="container-fluid">
              <h3 className="page-title">Generate Token</h3>
              <h4 className="page-title">
                Lorem ipsum dolor sit amet, <code>consectetur</code> adipiscing elit. Quisque
                nec venenatis est. Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec
                pellentesque neque dignissim eu. Duis a pretium sapien. Suspendisse efficitur eu metus ultrices
                suscipit. Mauris eget nulla a urna fermentum vulputate. Fusce ac leo rhoncus, convallis sem vel, blandit
                velit. Vestibulum pharetra dapibus nisi fermentum pretium.
              </h4>
              <div className="row">
                <div className="col-md-7">
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">Request</h3>
                    </div>
                    <div className="panel-body">
                      <table className="table table-hover">
                        <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Type</th>
                          <th>Position</th>
                          <th>#</th>
                          <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Authorization</td>
                          <td><code>string</code></td>
                          <td><code>Header</code></td>
                          <td><code>Required</code></td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        </tr>
                        <tr>
                          <td>username</td>
                          <td><code>string</code></td>
                          <td><code>Body</code></td>
                          <td><code>Required</code></td>
                          <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec venenatis est.
                            Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec pellentesque neque
                            dignissim eu.
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">Response</h3>
                    </div>
                    <div className="panel-body">
                      <pre>
                        {`{
  "status": true,
  "result_code": 200,
  "message": "Success!",
  "values": {
    "name": "Kiddy",
    "email": "kiddydhana@gmail.com",
    "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
    "account_status": "1"
    }
  }
                        `}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"/>
        <footer>
          <div className="container-fluid">
            <p className="copyright">
              &copy; 2017 <a href="https://www.themeineed.com" target="_blank">Theme I Need</a>. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}

export default App;
