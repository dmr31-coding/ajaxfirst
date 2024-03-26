document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);

    xhr.timeout = 2000;

    xhr.onload = () => {
        if(xhr.status === 200) {
            console.log(xhr)
            console.log(xhr.responseText);
        } else {
            console.log("problem occured");
        } 
    };

    xhr.onprogress = (e) => {
        console.log(e.loaded);
        console.log(e.total);
    };

    xhr.onerror = () => {
        console.log("Network not available");
        
    };

    xhr.onloadstart = () => {
        console.log("Transaction has started");
        
    };

    xhr.onloadend = () => {
        console.log("Transaction end");
        
    };

    xhr.onabort = () => {
        console.log("Abort");
        
    };

    xhr.ontimeout = () => {
        console.log("Timeout");
        
    };

    xhr.send();
    
}