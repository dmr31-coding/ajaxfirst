document.getElementById("btnajax").addEventListener("click", makerequest);


function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status === 200) {
            console.log(xhr.response);
            document.getElementById("info").innerText = "Data Inserted";
        } else {
            console.log("problem occured");
        } 
    };
    mydata = '{"name":"Ram","salary":"10000","age":"20"}';
    xhr.send(mydata);
    
}