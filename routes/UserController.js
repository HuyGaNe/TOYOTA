const mailer=require('nodemailer');

const { use } = require('../routes/index');
const userService =require('./UserService');
const login = async (email,password)=>{
    return await userService.login(email,password);
}
const register=async (email,password,name)=>{
    try {
        return await userService.register(email,password,name);
    } catch (error) {
        console.log("erroe",error);
    }   
    
}
module.exports={login,register};