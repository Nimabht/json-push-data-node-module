const jsonfile = require("jsonfile");

module.exports = {
  writeData: function (file, data) {
    jsonfile.writeFile(file, data, function (err) {
      if (err) throw err;
    });
  },
  pushData: function () {},
  deleteData: function (file, deleteByKey, deleteByValue) {
    const data = jsonfile.readFileSync(file);
    const index = data.findIndex((obj) => obj[deleteByKey] === deleteByValue);
    if (index !== -1) {
      data.splice(index, 1);
      jsonfile.writeFileSync(file, data);
    } else {
      throw new Error("Object not found in data file");
    }
  },
  deleteAllData: function (file, deleteByKey, deleteByValue) {
    const data = jsonfile.readFileSync(file);
    const newData = data.filter((obj) => obj[deleteByKey] !== deleteByValue);
    if (newData.length !== data.length) {
      jsonfile.writeFileSync(file, newData);
    } else {
      throw new Error("Objects not found in data file");
    }
  },
};
