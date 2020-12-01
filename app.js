async function dataFether() {
    const f = await fetch('/api');
    const data = await f.text();
    document.getElementById('app').innerHTML = data;
}

dataFether().then(function(){
    clearInterval(load);
    loading.style.display = "none";    
});

const loading = document.getElementById("loading");
let counter = 0;
const load = setInterval(() => {
    loading.style.transform = "rotateY(" + counter + "deg)";
    counter++;
}, 1);