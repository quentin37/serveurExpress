const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilders");


module.exports = {
    create: (req,res) => {
        dataSource
        .getRepository(Wilder)
        .save(req.body)
        .then(() => {
            res.status(201).send("wilder created successfully")
        })
        .catch(err => {
            res.send("Error creating wilder: " + err);
        });
    },

    findAll: async (req, res) => {
        try{
        const data = await dataSource.getRepository(Wilder)
        .find()
         res.status(200).send(data);
        } catch(err){
        console.log(err);
         res.status(500).send(err);
        }
    },

    delete: async (req, res) => {
        try{
        const data = await dataSource.getRepository(Wilder)
        .delete(req.body.idToDelete);
        res.send("wilder deleted");
        }
        catch(err){
            console.log(err);
            res.status(500).send(err);
        }
      },

    update: async (req, res) => {
        try{
            const data = await dataSource.getRepository(Wilder)
            .update(req.body.idToUpdate, {name: req.body.content})
            res.status(200).send("wilder updated")
        }
        catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    }
}