const fs = require("fs")
let cache = JSON.parse(fs.readFileSync(`${__dirname}/hd_availability_cache.json`).toString())

module.exports = {
    "write": function(id, data) {
        cache[id] = data;
    },

    "read": function() {
        return cache;
    }
}


// update pliku cache co 1h
let cacheWrite = setInterval(() => {
    fs.writeFileSync(`${__dirname}/hd_availability_cache.json`, JSON.stringify(cache))
}, 3600000)