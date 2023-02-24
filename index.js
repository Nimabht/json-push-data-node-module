const jsonfile = require("jsonfile");

module.exports = {
  writeData: function () {},
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
  pushData: function () {},
};
