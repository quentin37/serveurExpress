const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "wilder",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name:{
            type: "text",
        },
    },   
  relations: {
    skills: {
      target: "Skill",
      type: "many-to-many",
      joinTable: true,
      eager: true,
    },
  },
})