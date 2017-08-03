function init() {
    alert("hi");
}

var oReq = new XMLHttpRequest();
var results = document.getElementById('results');
oReq.onload = function(e){
    results.innerHTML = e.target.response;
};

oReq.open('GET', 'http://localhost:3000/api/companies', true);
oReq.setRequestHeader();
oReq.responseType = 'json';
oReq.send();