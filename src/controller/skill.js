const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");


module.exports = {
    create: (req,res) => {
        dataSource
        .getRepository(Skill)
        .save(req.body)
        .then(() => {
            res.status(201).send("Skill created successfully")
        })
        .catch(err => {
            res.send("Error creating Skill: " + err);
        });
    },

    findAll: async (req, res) => {
        try{
        const data = await dataSource.getRepository(Skill)
        .find()
         res.status(200).send(data);
        } catch(err){
        console.log(err);
         res.status(500).send(err);
        }
    },

    delete: async (req, res) => {
        try{
        const data = await dataSource.getRepository(Skill)
        .delete(req.body.idToDelete);
        res.send("Skill deleted");
        }
        catch(err){
            console.log(err);
            res.status(500).send(err);
        }
      },

    update: async (req, res) => {
        try{
            const data = await dataSource.getRepository(Skill)
            .update(req.body.idToUpdate, {name: req.body.content})
            res.status(200).send("Skill updated")
        }
        catch(err){
            console.log(err);
            res.status(500).send(err);
        }
    }
}