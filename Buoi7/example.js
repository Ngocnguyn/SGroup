function httpGet(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200)
            callback(request);
    }
    request.open("GET", url, true);
    request.send(null);
}

httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/1", function(response) {
    document.querySelector('.item-1').innerHTML = response.responseText;

    httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/2", function(response) {
        document.querySelector('.item-2').innerHTML = response.responseText;

        httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/3", function(response) {
            document.querySelector('.item-3').innerHTML = response.responseText;
        })
    })
})