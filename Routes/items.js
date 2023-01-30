const {getItem , postItem, deleteItem}=require('../Controller/itemController')


const getItemOPts={
    schema:{
        response:{
            200:{
                type:'array',
                items:{
                    type:'object',
                    properties:{
                       //id:{type:'string'},
                        name:{type:'string'}
                    }
                }
            }
        }
    },
    handler: getItem,
}

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

function itemRoute(fastify,options,done){
    fastify.get('/items',getItemOPts)
    
    fastify.get('/items/:id',(req,reply)=>{
        const {id}=req.params;
    
        const i=items.find((item)=> item.id===id)
        reply.send(i);
    })
    //Post request

    fastify.post('/items',postItemOPts)

    //Delete request
    fastify.delete('/items/:id',deleteItemOPts)

    done()
}
module.exports=itemRoute