var request = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

const getLinks = (url, patern, next) => {
  request(url, function(err, resp, html) {
    if (!err) {
      const links = [];
      const $ = cheerio.load(html);
      $(`a[href*="${patern}"]`).each((index, value) => {
        var link = $(value).attr('href');
        links.push(link);
      });
      next(null, links);
    }
  });
};

const promiseRequest = url => {
  const healthSymptoms = [];
  const moodSymptoms = [];
  const beautySymptoms = [];

  const options = {
    uri: url,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
  return request(options).then($ => {
    // title
    const name = $('h1').text();

    // description
    const description = $('.row .doc-content')
      .children('div.col-md-18')
      .children('p')
      .first()
      .text();

    // img
    const picture = $('.doc-right').prop('src');

    // symptoms
    healthSymptoms.push(...getSymptoms($, 15));
    moodSymptoms.push(...getSymptoms($, 16));
    beautySymptoms.push(...getSymptoms($, 17));
    return {
      name,
      description,
      picture,
      goodFor: [...healthSymptoms, ...moodSymptoms, ...beautySymptoms]
    };
  });
};

const promiseSymptomsRequest = url => {
  const healthSymptoms = [];
  const moodSymptoms = [];
  const beautySymptoms = [];

  const options = {
    uri: url,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
  return request(options).then($ => {
    // symptoms
    healthSymptoms.push(...getSymptoms($, 15));
    moodSymptoms.push(...getSymptoms($, 16));
    beautySymptoms.push(...getSymptoms($, 17));
    return [
      {
        category: 'Health',
        list: [...healthSymptoms]
      },
      {
        category: 'Mood',
        list: [...moodSymptoms]
      },
      {
        category: 'Beauty',
        list: [...beautySymptoms]
      }
    ];
  });
};

const getDataFromLinks = links => {
  return Promise.all(links.map(link => promiseRequest(link)));
};

const getDataSymptomsFromLinks = links => {
  return Promise.all(links.map(link => promiseSymptomsRequest(link)));
};

const getSymptoms = ($, index) => {
  return $('ul')
    .eq(index)
    .children('li')
    .map(function(i, element) {
      return $(element)
        .text()
        .trim();
    })
    .get()
    .join(',')
    .split(',');
};

function getUnique(arr, comp) {
  const unique = arr
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
}

const saveData = data => {
  const newData = getUnique(data, 'name');
  fs.writeFileSync('../src/resources/oils.json', JSON.stringify(newData));
};
const categories = ['Beauty', 'Health', 'Mood'];

const saveDataSymptoms = data => {
  const list = [];

  const newData = data[0]
    .map(d => {
      list.push(...d.list);
      return {
        category: d.category,
        list: [...new Set(list)]
      };
    })
    .filter(d => {
      return categories.includes(d.category);
    });

  fs.writeFileSync('../src/resources/symptoms.json', JSON.stringify(newData));
};
getLinks(
  'http://www.doctissimo.fr/sante/aromatherapie/guide-huiles-essentielles',
  'http://www.doctissimo.fr/sante/aromatherapie/guide-huiles-essentielles/huile-essentielle-',
  (err, response) => {
    if (err) {
      throw new Error('une erreur est survenue');
    }
    getDataFromLinks(response).then(response => {
      saveData(response);
    });

    getDataSymptomsFromLinks(response).then(response => {
      saveDataSymptoms(response);
    });
  }
);
