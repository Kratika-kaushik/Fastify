const { postItem, deleteItem}=require('../Controller/itemController')
const mongoose=require('mongoose')
const Employee=require("../models/schema")


function itemRoute(fastify,options,done){
    fastify.get('/items',async (req, reply) => {
        try {
          const res=await Employee.find()
          reply.send(res)
        } catch (err) {
          console.error(err)
        }
      })




    
    fastify.get('/items/:id',async (req,reply)=>{
        const id = req.params.id
        const emp = await Employee.findById(id)
        reply.send(emp)
    })
    //Post request

    fastify.post('/items',postItemOPts)

    //Delete request
    fastify.delete('/items/:id',deleteItemOPts)

    done()
}

// const getItemOPts={
//     schema:{
//         response:{
//             200:{
//                 type:'array',
//                 items:{
//                     type:'object',
//                     properties:{
//                        //id:{type:'string'},
//                         name:{type:'string'}
//                     }
//                 }
//             }
//         }
//     },
//     handler: getItem,
// }

const postItemOPts={
    schema:{
        response:{
            201:{
               // type:'array'
                    type:'object',
                    properties:{
                       //id:{type:'string'},
                        name:{type:'string'}
                    }
                
            }
        }
    },
    handler: postItem,
}

const deleteItemOPts={
    schema:{
        response:{
            200:{
               // type:'array'
                    type:'object',
                    properties:{
                       //id:{type:'string'},
                        message:{type:'string'}
                    }
                
            }
        }
    },
    handler: deleteItem,
}
module.exports=itemRoute