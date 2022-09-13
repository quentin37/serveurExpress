const typeorm = require('typeorm');

module.exports = {
    dataSource: new typeorm.DataSource({
        type: "sqlite",
        database: "./wilders.sqlite",
        synchronize: true,
        entities: [require("./entity/Wilders"), require("./entity/Skill")],
      })

}
