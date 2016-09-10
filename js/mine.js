

	function submitform() 
{
    var name = document.getElementById('Name').value;
    var company = document.getElementById('Company').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('Message').value;

    var data = {"Name":name,"Company":company,"Email":email,"Message":message};
    var datastring=JSON.stringify(data);
 	var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://codetracksitetest.azurewebsites.net/api/contact",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "59e19f50-8cad-29fc-ed99-223ee0f079f8"
      },
      "processData": false,
      "data": datastring,
       success:function(data, textStatus, jqXHR) 
			{
				//data: return data from server
				console.log("OK");
                window.open("sent.html","_self");
			},
		error: function(jqXHR, textStatus, errorThrown) 
			{
				//if fails  
				console.log("FAIL");  
				window.open("notsent.html","_self");
 
    		}
 	};
	

		
		$.ajax(settings).done(function(response) {
			console.log(response);
		});

	console.log("B");
	}


function contact(email,content)
{
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:36382/api/contact",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache",
        "postman-token": "59e19f50-8cad-29fc-ed99-223ee0f079f8"
      },
      "processData": false,
      "data": "{\"Email\":\""+ email + "\", \"Content\":\""+content+"\"}"
    }

    $.ajax(settings).done(function (response) 
    {
    console.log(response);
    }
    );
}

