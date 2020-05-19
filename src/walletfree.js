
var demoBaseUrl= "http://localhost:8090/cash36/" 
//var demoBaseUrl= "http://demo.e36.io:8090/cash36/" 
var prodBaseUrl= "https://cash36.io/cash36/" 


function simulatePayment() {
    var xhr = new XMLHttpRequest();
    var url = demoBaseUrl+"exchange/buy/public/for";
    console.log("calling "+url);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            showPaymentInfo(json);
        }
    };
    var data = JSON.stringify({
        "amount": 5,
        "symbol": "EUR36",
        "targetAddress": "0xb62d5cfe67b69f9bf045a2f7ef923a384d533154",  // https://rinkeby.aragon.org/?#/fibreetest/0xb62d5cfe67b69f9bf045a2f7ef923a384d533154/
        "targetAddressType": "CONTRACT", 
        "userIban": "CH93 0076 2011 6238 5295 7DE89 3704 0044 0532 0130 00" // this is used in dev/test to simulate payments. You need to create a user, use this number when onboarding  
      });
    xhr.send(data);

}
function getPaymentInfo() {

    var xhr = new XMLHttpRequest();
    var url = prodBaseUrl+"exchange/buy/public/for";
    console.log("calling "+url);    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            showPaymentInfo(json);
        }
    };
    var data = JSON.stringify({
        "amount": 5,
        "symbol": "CHF36",
        "targetAddress": "0xeB237523c412a56dde5b8eE0Bc2A6faBfC187afd",
        "targetAddressType": "CONTRACT", 
      });
    xhr.send(data);

}

function showPaymentInfo(serverInfo) {
    console.log(JSON.stringify(serverInfo));
    document.getElementById("bankslip").innerHTML=serverInfo.qrCodeSVG;
    for(var key in serverInfo)  {
        if (document.getElementById(key)) {
            document.getElementById(key).innerHTML=serverInfo[key];
        }
    };
}