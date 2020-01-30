const https = require('https');

function request(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            res.setEncoding('UTF-8');
            const contentType = res.headers['content-type'];
            const statusCode = res.statusCode;

            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed. Status Code:${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error(`Invalid Content Type. Recieved: ${contentType}`);
            }
            
            if (error) {
                reject(error);
                return;
            }
            let rawdata = '';
            res.on('data', data => {
                rawdata += data;
            });

            res.on('end', () => {
                const parsedData = JSON.parse(rawdata);
                resolve(parsedData);
            });
        });
    });
}

module.exports = request;