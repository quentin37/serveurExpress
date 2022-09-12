module.exports = {
    create: (req,res) => {
        console.log(req.body);
        res.send("wilder controller check");
    }
};