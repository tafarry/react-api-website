import React from 'react';

export default function Response({res}){
    return(
        <div className="col-md-5">
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">Response</h3>
                </div>
                <div className="panel-body">
                    <pre>
                        {res}
                    </pre>
                </div>
            </div>
        </div>
    )
}