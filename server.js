const mongoose=require("mongoose");
const {MongoClient}= require("mongodb");
const uri='mongodb+srv://kratika-mtalkz:kratika-mtalkz@cluster0.4o3dgcq.mongodb.net/EmployeeDB?retryWrites=true&w=majority';

const fastify=require('fastify')({logger:true})
fastify.register(require('./Routes/items'))
const client =new MongoClient(uri);

//const Employee=mongoose.model("employees",employeeSchema);


async function connect(){
    try{
        mongoose.set("strictQuery",false)
        mongoose.connect(uri,{useNewUrlParser : true})
        console.log("connected to mongodb");
        // const emp=await employees.insertOne({"name":"bdjhbfw","age":21,"designation":"fdvge"})
        
    }catch(error){
        console.error(error);
    }
}
connect();

const start=async()=>{
    try{
        await fastify.listen({port:5000})
        
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start();





// const getItem = async (req, reply) => {
//     try {
//       //  const data = await Employee.find()
//         const data  = new Employee({
//             name:"prasahnt"
//         })
//         await data.save()
//         // const res =  await Employee.find((err)=>{
//         //     console.log(err)
//         // })
//          console.log(data)
//        console.log("uehb") 
//     } catch (err) {
//       console.error(err)
//     }
//   }
