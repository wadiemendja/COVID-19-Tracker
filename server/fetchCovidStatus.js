const fetch = require('node-fetch');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

async function fetchCovidStatus() {
    const f = await fetch('https://news.google.com/covid19/map?hl=en-US&mid=%2Fm%2F0h3y&gl=US&ceid=US%3Aen');
    const data = f.text();
    return data;
}

function filterData(html) {
    const dom = new JSDOM(html);
    const selectore = "#yDmH0d > c-wiz > div > div.FVeGwb.ARbOBb > div.BP0hze > div.y3767c > div > div > div.zRzGke.EA71Tc.pym81b";
    const stat = dom.window.document.querySelector(selectore).innerHTML;
    return stat;
}

module.exports = {fetchCovidStatus, filterData}