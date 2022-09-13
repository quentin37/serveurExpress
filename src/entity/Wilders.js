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
})