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

const promise = new Promise ((resolve, reject) => {
    httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/1", resolve)
})
const promise2 = new Promise((resolve, reject) => {
    httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/2", resolve)
})
const promise3 = new Promise((resolve, reject) => {
    httpGet("https://631b4048fae3df4dcff94f47.mockapi.io/api/todoItems/3", resolve)
})

// promise.then((response) => {
//     document.querySelector('.item-1').innerHTML = response.responseText;
//     return promise2;
// }).then((response) => {
//     document.querySelector('.item-2').innerHTML = response.responseText;
//     return promise3;
// }).then((response) => {
//     document.querySelector('.item-3').innerHTML = response.responseText;
// })

async function main(){
    try{
        const res = await promise
        document.querySelector('.item-1').innerHTML = res.responseText;
        const res2 = await promise2
        document.querySelector('.item-2').innerHTML = res2.responseText;
        const res3 = await promise3
        document.querySelector('.item-3').innerHTML = res3.responseText;
    }
    catch(error){
        document.querySelector('.item-1').innerHTML = error;
        const res = await promise
        document.querySelector('.item-2').innerHTML = res.responseText;
        const res2 = await promise2
        document.querySelector('.item-3').innerHTML = res2.responseText;
        const res3 = await promise3
    }
}
async function run(){
    await main 
    console.log('done')
}

run();