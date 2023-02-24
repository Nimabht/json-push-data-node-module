
# Node.js - json-update-data

You can use this module for updating your json files in easiest way :)




## Installation

Install json-update-data

```bash
  npm install json-update-data
```
    
## Write data

```javascript
const Jud = require("json-update-data");
const file = "/tmp/data.json";
const data = [
  {name: "Jeff"}
];
Jud.writeData(file, data);

```

## Add new data

```javascript
const Jud = require("json-update-data");
const file = "/tmp/data.json";
const newData = [
  {name: "Jeff"}
];
Jud.pushData(file, newData);

```
## Delete  data

```javascript
const Jud = require("json-update-data");
const file = "/tmp/data.json";
// 2nd parameter : key name in object
// 3nd parameter : Value that assigned to that key
Jud.deleteData(file, "name", "Jeff");

```
## Delete all data

```javascript
const Jud = require("json-update-data");
const file = "/tmp/data.json";
// 2nd parameter : key name in object
// 3nd parameter : Value that assigned to that key
Jud.deleteAllData(file, "name", "Jeff");


```


## Authors

- [@Nimabht](https://github.com/Nimabht)

