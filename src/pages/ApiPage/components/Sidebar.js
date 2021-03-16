import React from 'react';

export default function Sidebar({endpoints,setActive}){
    return(
        <div id="sidebar-nav" className="sidebar">
          <div className="sidebar-scroll">
            <nav>
              <ul className="nav">
                <li><a href="/" className=""><i className="lnr lnr-home"/> <span>Dashboard</span></a></li>
                {
                  endpoints.map((item,index)=>(
                    <li key={item.key}>
                      <a href="#subPages" data-toggle="collapse" className="collapsed">
                        <i className="lnr lnr-file-empty"/>
                        <span>{item.title}</span>
                        <i className="icon-submenu lnr lnr-chevron-left"/>
                      </a>
                      <div id="subPages" className="collapse ">
                        <ul className="nav">
                          {
                            item.endpoints.map((endpoint,index)=>(
                              <li key={endpoint.key}>
                                <a href={'#'+endpoint.name} onClick={(e)=>{e.preventDefault();setActive(endpoint)}} className="">
                                  {endpoint.name} &nbsp; 
                                  <span 
                                    className={"label "+(endpoint.method==='GET'?'label-success':endpoint.method==='POST'?'label-primary':endpoint.method==='PUT'?'label-warning':'label-danger')}
                                  >
                                    {endpoint.method}
                                  </span>
                                </a>
                              </li>    
                            ))
                          }
                        </ul>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
    );
}