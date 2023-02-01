const Branch = require("../models/Branch");
const User = require("../models/User")
const { generateToken } = require("../config/token");

const branchManagement = {
    //Crear sucursal
    createBranch: async function(req,res){
        try{
            const branch = await new Branch({
                name: req.body.name,
                capMax: req.body.capMax,
                email: req.body.email,
                timetable: "19:00 - 23:00"
            })
            branch.save()


            res.send("Created")
        }
        catch(error){
            res.status(401).send(error)
        }
    
    },
    

    allOperatorsInBranch: async function(req,res){
        try{
            const operators = await Branch.find({_id: req.params.id})

            const operatorsInBranch = []

            for(let i = 0; i < operators[0].idOperator.length; i++){
                let ops = await User.findOne({_id: operators[0].idOperator[i]})
                operatorsInBranch.push(ops.fullName)
            }
            res.status(200).send(operatorsInBranch)
        }
        catch(error){
            res.status(401).send(error)
        }
    },

    allBranchs: async function(req,res){
        try{
            const branchs = await Branch.find()
            res.status(200).send(branchs)
        }
        catch(error){
            res.status(500).send(error)
        }
    },

    branchById: async function(req,res){
        try{
            const branch = Branch.findOne({_id: req.params.id})
            res.status(200).send(branch)
        }
        catch(error){
            res.status(401).send(error)
        }
    },

    updateBranch: async function (req,res){
        try{

            await Branch.updateOne({
                _id: req.params.id
            },
            {
             name: req.body.name,
             capMax: req.body.capMax,
             email: req.body.email,
            }
            )
            for(let i = 0; i < req.body.idOperator.length; i++){
                let branch = await Branch.find({_id: req.params.id})

                let exist = branch[0].idOperator.indexOf(req.body.idOperator[i])
                console.log(exist)
                if(exist == -1) await Branch.update({_id: req.params.id}, {$push: { idOperator: req.body.idOperator[i]}})
            }

            res.status(200).send("Updated!")
        }
        catch (err){
            res.status(500).send(err)

        }

    },

    deleteBranch: async function(req,res){
        try{
            const branch = await Branch.deleteMany()

            res.status(200).send("Deleted!")
        }
        catch(error){
            res.status(500).send(error)
        }
    }
}


module.exports = branchManagement;