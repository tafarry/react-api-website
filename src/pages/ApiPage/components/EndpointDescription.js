import React from 'react';

export default function EndpointDescription({description,title}){
    return(
        <div>
            <h3 className="page-title">{title}</h3>
              <h4 className="page-title">{description}</h4>
        </div>
    );
}