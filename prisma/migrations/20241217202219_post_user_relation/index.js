import 'dotenv/config';
import { Prisma, PrismaClient } from "@prisma/client" ;

const prisma = new PrismaClient()

 async function main (){

    try {
        const newUser = await prisma.post.create({
            data: {
                tittle:"Mi primer publicaion",
                author:"Mi primeria publicacion en post"
                
            }
        });

        console.log("Nuevo Usuario Creado" , newUser);

        //const newPost = await prisma.post.create({
            //data:{
               // tittle: "MI primer publicacion ",
                //content:"Este es mi primer post",
                //author:{
                    //connect : {
                        //id : newUser.id
                    //}
               
            //}
        //})
        
        //onsole.log(newPost)
        
    } catch (error) {

        if( error.code === 'p2002' ){
            //console.error("Error: violacion de restricion unica este correo electronico ya esta registrado")

        }else{
            console.error ("Error al crear usuario ", error.message);
            console.error("Detalles del error ", error);
        }
        
    }

    finally {
         prisma.$disconnect
    }
// forma como podemos actualizar un campo en la base de
    

   
    
}
 

main();