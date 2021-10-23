console.log("Tutorial 30 : AJAX Tutorial's");

/*
asynchronous - aapki process background main chal rahi hai or aap aage process kar ke badh gaye hai

AJAX stand for asynchronous Javascript and XML [A for asynchronous, JA for Javascript, X for XML = AJAX]

AJAX is not programming language, Rather its set of existing technologies. [which technologies inshort asynchronous,Javascript and XML]

AJAX helps in feching datas asynchronously without interfering with the existing page.

No Page Reload/Referess

Modern website use JSON insted or XML for data transfer.


(*) WHY USE AJAX ?
- No Page reload.
- Better use Experience.
- Save network bandwith
- Very interactive.


(*) HOW IT WORKS ?
- Pure Javascript ne Vainilaa Javascript pan kahevay chhe.

- AJAX is used 'XMLHttpRequest object' (also called xhr object) to achieve this.
- Modern websites use JSON insted or XML for Data Transfer.
- Data can be transferred in any format and protocol(not alway https necesarrily)

*/

/*
how to Create AJAX :=
First Step : Create Object of xhr
Secend Step : Open this Object
Third Step : Then Send Request
*/

let fatchBtn = document.getElementById('fatchBtn');
fatchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("click and Fatch Data");
    // Create here xhr Object
    const xhr = new XMLHttpRequest();
    

    //Open the Object (firstParameter : GET,POST)(secendParameter : anyFile/URL)(thirdParameter : if you use Async - true / Sync - false)
    //xhr.open('GET','xhrFile.txt',true);   // you can use file
    xhr.open('GET','https://gorest.co.in/public/v1/posts',true);     // you can use URL for JSON Data
    //xhr.open('GET','https://gorest.co.in/public/v1/posts',false); 

    // Jab Progree ho rahi hai to kya hogaa(Optional)
    xhr.onprogress = function(){
        console.log('On Progress...');
    }


    xhr.onreadystatechange = function(){
        console.log('Ready State is ',xhr.readyState);
    }

    /* What is onreadystatechange
        Value	State	Description
    0	UNSENT	Client has been created. open() not called yet.
    1	OPENED	open() has been called.
    2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3	LOADING	Downloading; responseText holds partial data.
    4	DONE	The operation is complete.

    */ 


    // Jab kuch taiyyar ho jaye tab 
    xhr.onload = function(){
        // if xhrFile.txt na ho or usko check karana ho hai ki nai to status check karayenge
        if(this.status === 200){ // 200 response code chhe HTTP no means  = OK
            console.log(this.responseText);
        }else{
            console.log("Some error occured");
        }
    }


    // Last main Apko Send bhi karna hai
    xhr.send();
    console.log('We are Done')  // A line pahela lakhi ne avse console ma bcz Async apde TRUE (line 50) karyu chhe.
    // if FALSE katishu to block wise run thase..
}


/*
HTTPS STATUS CODE :

1×× Informational

100 Continue
101 Switching Protocols
102 Processing

2×× Success

200 OK
201 Created
202 Accepted
203 Non-authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
226 IM Used

3×× Redirection

300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
307 Temporary Redirect
308 Permanent Redirect

4×× Client Error

400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 Request-URI Too Long
415 Unsupported Media Type
416 Requested Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
444 Connection Closed Without Response
451 Unavailable For Legal Reasons
499 Client Closed Request

5×× Server Error

500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
599 Network Connect Timeout Error
*/