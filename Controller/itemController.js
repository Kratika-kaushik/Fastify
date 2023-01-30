let items=require("../Items")

const getItem=function (req,reply){
    reply.send(items);
}

const postItem=function (req,reply){
  //  let {id}=req.body.id;
    let {name}=req.body;
    
    let item={
               
              name
    }

    items=[...items,item]
    reply.code(201).send(item)
}

const deleteItem= function(req,reply){
    const {id}=req.params;
   items =items.filter(item=> item.id!=id)
    reply.send({message:`Item ${id} has been deleted`})
}

module.exports={getItem,postItem, deleteItem}