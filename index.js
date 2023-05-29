const axios = require("axios");

async function sulmojNeBackend(url, data) {
    await axios.post(url, data).then((res) => console.log(res.data));
}

async function hollojPiBackEndi(url) {
    await axios.get(url).then((res) => console.log(res.data)); 
    
}

module.exports = { sulmojNeBackend, hollojPiBackEndi };