const { use } = require('../../index');
const subjectModel = require('./SubjectModel');
const bcrypt = require('bcryptjs');

const getAllSubject = async()=>{
    try {
        //lay toan bo mon hoc
     
        return await subjectModel.find();
        
    } catch (error) {
        console.log("loi me r")
    }
}
const addNewSubject = async (nameSubject, nameTeacher, categorySubject) => {
    try {
        // const newProduct = {
        //     _id: data.length + 1,
        //     name,
        //     price,
        //     quantity,
        //     image,
        //     category
        // }
        // data.push(newProduct);
        const newSubject = {
            nameSubject, nameTeacher, categorySubject
        }
        const p = new subjectModel(newSubject);
        await p.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports={getAllSubject,addNewSubject};

