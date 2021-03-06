async function dataFether() {
    const f = await fetch('/api');
    const data = await f.text();
    document.getElementById('app').innerHTML = data;
}

dataFether().then(function () {
    clearInterval(load);
    loading.style.display = "none";
    cleanUpdata();
});

const loading = document.getElementById("loading");
let counter = 0;
const load = setInterval(() => {
    loading.style.transform = "rotateY(" + counter + "deg)";
    counter++;
}, 1);

function cleanUpdata() {
    // img source 
    const img = document.querySelector("img");
    img.src = "https://www.worldometers.info/img/flags/small/tn_ag-flag.gif";
    // remove some useless elements
    document.getElementById('page-top').remove();
}