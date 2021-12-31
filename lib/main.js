const request = require('request');
const { XMLParser, XMLBuilder, XMLValidator} = require('fast-xml-parser');
module.exports = {
    kurbilgisi() {
        return new Promise(async (resolve, reject) => {
            try {
                request('https://www.tcmb.gov.tr/kurlar/today.xml', function (error, response, body) {
                    //var myJson = convert.xml2json(body, {compact: false, spaces: 2});

                    const parser = new XMLParser();
                    let myJson = parser.parse(body);

                    resolve(myJson.Tarih_Date.Currency)
                });

            } catch (error) {
                reject(error);
            }
        });
    },
}