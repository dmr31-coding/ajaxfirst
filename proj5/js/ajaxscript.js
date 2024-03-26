document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.withCredentials = true;
    xhr.responseType = "text";
    xhr.setRequestHeader = "content-type", "application/json";

    xhr.onload = () => {
        if(xhr.status === 200) {
            console.log("XHR object", xhr)
            console.log("responseText", xhr.responseText);
            console.log("statusText", xhr.statusText);
            console.log("response", xhr.response);
            console.log("responseURL", xhr.responseURL);
            console.log("withCredentials", xhr.withCredentials);
            console.log(xhr.getResponseHeader("Last-Modified"));
            console.log(xhr.getAllResponseHeaders());

        } else {
            console.log("problem occured");
        } 
    };
    
    xhr.send();
    
}