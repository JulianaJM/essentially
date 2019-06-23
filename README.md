# essentially

### Elasticsearch local server:

download elasticsearch-7.1.1
cd elasticsearch-7.1.1/bin
./elasticsearch

#### insert data

cd src/resources

- Création index + import mapping :
  curl -XPUT -H "Content-Type: application/json" localhost:9200/oilsdetails -d @oils-details-mapping.json

- Import json file (remove \ of \_bulk)
  curl -XPOST "localhost:9200/\_bulk?pretty" -H 'Content-Type: application/x-ndjson' --data-binary @oils-details_elastic.json

#### delete data

curl -X DELETE "localhost:9200/index_name"

### utils

init eslintrc :
npx eslint --init
