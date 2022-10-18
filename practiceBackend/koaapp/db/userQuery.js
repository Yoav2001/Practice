import knex from './db'

const getAllUsers = async(name,pass,isAdmin) =>{

        try{
            const data = await knex.select().from('user');
            console.log('db get all users');
            console.log(data);
            console.log('end function');
        
        }
        catch (err){
            throw err
        }

}
export  default  getAllUsers