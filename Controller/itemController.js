//let items=require("../Items")
const mongoose=require("mongoose")
const Employee=require("../models/schema")




const postItem=async(req,reply)=>{
    const Emp= new Employee(req.body)
     Emp.save()
}

const deleteItem= async (req,reply)=>{
    const id = req.params.id
    const emp = await Employee.findByIdAndRemove(id)

    reply.send({message:`Item ${id} has been deleted`})
}

module.exports={postItem, deleteItem}