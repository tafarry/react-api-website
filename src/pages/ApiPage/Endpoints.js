 const Endpoints = [
    {
      "key":"Token",
      "title":"Token",
      "endpoints":[
        {
            "key":"1","name":"Check Token","method":"GET",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec venenatis est. Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec pellentesque neque dignissim eu. Duis a pretium sapien. Suspendisse efficitur eu metus ultrices suscipit. Mauris eget nulla a urna fermentum vulputate. Fusce ac leo rhoncus, convallis sem vel, blandit velit. Vestibulum pharetra dapibus nisi fermentum pretium.",
            "request":[
              {key:'1',parameter:"Authorization",type:"string","position":"Header",Required:'true',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
              {key:'2',parameter:"username",type:"string","position":"body",Required:'true',description:""},
            ],
            "response":`{
                "status": true,
                "result_code": 200,
                "message": "Success!",
                "values": {
                  "name": "Kiddy",
                  "email": "kiddydhana@gmail.com",
                  "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
                  "account_status": "1"
                  }
                }`
        },
        {
          "key":"2","name":"Generate Token","method":"POST",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec venenatis est. Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec pellentesque neque dignissim eu. Duis a pretium sapien. Suspendisse efficitur eu metus ultrices suscipit. Mauris eget nulla a urna fermentum vulputate. Fusce ac leo rhoncus, convallis sem vel, blandit velit. Vestibulum pharetra dapibus nisi fermentum pretium.",
            "request":[
              {key:'1',parameter:"Authorization",type:"string","position":"Header",Required:'true',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
              {key:'2',parameter:"userPost",type:"string","position":"body",Required:'true',description:""},
            ],
            "response":`{
                "status": true,
                "result_code": 200,
                "message": "Post!",
                "values": {
                  "name": "Kiddy",
                  "email": "kiddydhana@gmail.com",
                  "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
                  "account_status": "1"
                  }
                }`
        },
        {
          "key":"3","name":"Refresh Token","method":"PUT",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec venenatis est. Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec pellentesque neque dignissim eu. Duis a pretium sapien. Suspendisse efficitur eu metus ultrices suscipit. Mauris eget nulla a urna fermentum vulputate. Fusce ac leo rhoncus, convallis sem vel, blandit velit. Vestibulum pharetra dapibus nisi fermentum pretium.",
            "request":[
              {key:'1',parameter:"Authorization",type:"string","position":"Header",Required:'true',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
              {key:'2',parameter:"userRefresh",type:"string","position":"body",Required:'true',description:""},
            ],
            "response":`{
                "status": true,
                "result_code": 200,
                "message": "Refresh!",
                "values": {
                  "name": "Kiddy",
                  "email": "kiddydhana@gmail.com",
                  "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
                  "account_status": "1"
                  }
                }`
        },
        {
          "key":"4","name":"Delete Token","method":"DELETE",
          "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec venenatis est. Aliquam scelerisque bibendum volutpat. Donec vehicula tincidunt arcu, nec pellentesque neque dignissim eu. Duis a pretium sapien. Suspendisse efficitur eu metus ultrices suscipit. Mauris eget nulla a urna fermentum vulputate. Fusce ac leo rhoncus, convallis sem vel, blandit velit. Vestibulum pharetra dapibus nisi fermentum pretium.",
            "request":[
              {key:'1',parameter:"Authorization",type:"string","position":"Header",Required:'true',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
              {key:'2',parameter:"userdelete",type:"string","position":"body",Required:'true',description:""},
            ],
            "response":`{
                "status": true,
                "result_code": 200,
                "message": "Delete!",
                "values": {
                  "name": "Kiddy",
                  "email": "kiddydhana@gmail.com",
                  "token": "9WUzKE7kCI1vSuQAbrmOwc2m2dk1NbPR",
                  "account_status": "1"
                  }
                }`
        }
      ]
    }
  ];
  export default Endpoints;