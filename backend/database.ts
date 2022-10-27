import { connect } from "mongoose"

export const startConnection = async () => {
    const db = await connect('mongodb://root:rootpassword@localhost/crud-typescript?authSource=admin')
    try{
        console.log('db is connected to', db.connection.name);
    }catch(error){
        console.log(error);
    }   
};