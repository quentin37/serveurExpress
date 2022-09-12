const typeorm = require('typeorm');

module.exports = {
    dataSource: new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersApp.sqlite",
        synchronize: true,
        entities: [require("./entity/Wilders")],
      })

}
