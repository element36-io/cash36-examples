
var baseUrl= "http://localhost:8090/cash36/" //"http://demo.e36.io:3000/";


function getPaymentInfo() {

    var xhr = new XMLHttpRequest();
    var url = baseUrl+"exchange/buy/public/for";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            showPaymentInfo(json);
        }
    };
    var data = JSON.stringify({
        "amount": 4443,
        "symbol": "CHF36",
        "targetAddress": "0xeB237523c412a56dde5b8eE0Bc2A6faBfC187afd",
        "targetAddressType": "CONTRACT", 
        "userIban": "DE89 3704 0044 0532 0130 00" // this is used in dev/test to simulate payments. You need to create a user, use this number when onboarding  

      });
    xhr.send(data);

}

function showPaymentInfo(serverInfo) {
    console.log(JSON.stringify(serverInfo));
}