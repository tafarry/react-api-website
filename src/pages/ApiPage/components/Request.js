import React from 'react';

export default function Request({request}){
    return(
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
                {
                  request.map((item,index)=>(
                    <tr key={item.key}>
                      <td>{item.parameter}</td>
                      <td><code>{item.type}</code></td>
                      <td><code>{item.position}</code></td>
                      <td><code>{item.required}</code></td>
                      <td>{item.description}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}