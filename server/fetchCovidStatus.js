const fetch = require('node-fetch');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

async function fetchCovidStatus() {
    const url = "https://www.worldometers.info/coronavirus/country/algeria/";
    const f = await fetch(url);
    const data = await f.text();
    return data;
}

function filterData(html) {
    const dom = new JSDOM(html);
    const selectore = ".content-inner";
    const stat = dom.window.document.querySelector(selectore).innerHTML;
    return stat;
}

module.exports = {fetchCovidStatus, filterData}