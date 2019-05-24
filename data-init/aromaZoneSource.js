var request = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

const getLinks = (urls, paterns) => {
  const links = [];
  return Promise.all(
    urls.map((url, i) => {
      return request({
        uri: url,
        transform: function(body) {
          return cheerio.load(body);
        }
      }).then($ => {
        $(`a[href*="${paterns[i]}"]`).each((index, el) => {
          let value = `https://www.aroma-zone.com${$(el)
            .attr('href')
            .trim()}`;

          links.push(value);
        });
        return links;
      });
    })
  ).then(response => {
    getDataFromLinks(response[0]).then(response => {
      saveData(response);
    });
  });
};

const promiseRequest = url => {
  const options = {
    uri: url,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
  return request(options).then($ => {
    // title
    const name = $('h1').text();
    const healthDetails = getDetails($, 'sante');
    const moodDetails = getDetails($, 'bien-etre');
    const beautyDetails = getDetails($, 'beaute');
    const kitchen = getDetailsKitchen($);

    const result = {
      oil: name,
      Health: { ...healthDetails },
      Mood: { ...moodDetails },
      Beauty: { ...beautyDetails },
      Kitchen: { ...kitchen }
    };
    return result;
  });
};

const getDetails = ($, filter) => {
  const propertiesDesc = $(`tr.row-propriete.${filter}`)
    .children('.col-propriete')
    .children('.propriete-desc.proprietes')
    .children('label')
    .text();
  const properties = $(`tr.row-propriete.${filter}`)
    .children('.col-propriete')
    .children('.propriete-desc.proprietes')
    .children('ul')
    .children('li')
    .map(function(i, element) {
      return $(element)
        .text()
        .trim();
    })
    .get();

  const synergies = $(`tr.row-propriete.${filter}`)
    .children('.col-propriete')
    .children('.propriete-desc.synergies')
    .children('ul')
    .children('li')
    .map(function(i, element) {
      return $(element)
        .text()
        .trim();
    })
    .get();

  let indicationsDesc = $(`tr.row-propriete.${filter}`)
    .children('.col-propriete')
    .children('.propriete-desc.indications')
    .first()
    .text();

  if (!indicationsDesc) {
    indicationsDesc = $(`tr.row-propriete.${filter}`)
      .children('.col-propriete')
      .children('.propriete-desc.utilisations')
      .first()
      .text();
  }

  let indications = $(`tr.row-propriete.${filter}`)
    .children('.col-propriete')
    .children('.propriete-desc.indications')
    .children('ul')
    .children('li')
    .map(function(i, element) {
      return $(element)
        .text()
        .trim();
    })
    .get();

  if (indications.length === 0) {
    indications = $(`tr.row-propriete.${filter}`)
      .children('.col-propriete')
      .children('.propriete-desc.utilisations')
      .children('ul')
      .children('li')
      .map(function(i, element) {
        return $(element)
          .text()
          .trim();
      })
      .get();
  }

  return {
    propertiesDesc,
    properties,
    indicationsDesc,
    indications,
    synergies
  };
};

const getDetailsKitchen = $ => {
  const kitchenDesc = $('tr.row-propriete.cuisine')
    .children('.col-propriete')
    .children('.propriete-desc')
    .first()
    .text();

  const details = $('tr.row-propriete.cuisine')
    .children('.col-propriete')
    .children('.propriete-desc')
    .children('ul')
    .children('li')
    .map(function(i, element) {
      return $(element)
        .text()
        .trim();
    })
    .get();

  return {
    kitchenDesc,
    details
  };
};
const getDataFromLinks = links => {
  return Promise.all(links.map(link => promiseRequest(link)));
};

const saveData = data => {
  //console.log(data);
  fs.writeFileSync('../src/resources/oils-details.json', JSON.stringify(data));
};

const links = [
  'https://www.aroma-zone.com/info/guide-des-huiles-essentielles/tous'
];

const filters = ['/info/fiche-technique/huile-essentielle'];
getLinks(links, filters, err => {
  if (err) {
    throw new Error('une erreur est survenue');
  }
});
