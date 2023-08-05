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
const getSubject=async()=>{
    try {
        //lay toan bo mon hoc
     
        return await subjectModel.find({},'nameSUbject');
        
    } catch (error) {
        console.log("loi me r ne") 
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
        console.log("daaa:"+nameTeacher)
        await p.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
// xoa san pham theo id
const deleteSubjectById = async (id) => {
    try {
        // const index = data.findIndex(item => item._id.toString() == id.toString());
        // if (index >= 0) {
        //     data.splice(index, 1);
        //     return true;
        // }
        //return false
        await subjectModel.findByIdAndDelete(id);// mongodb
        return true;
    } catch (error) {
        console.log('Delete product by Id error:', error);
        throw error;
        return false;
    }

}
//lay thong tin 1 san pham theo id
const getSubjectById = async (id) => {
    try {
        // const product = data.find(item => item._id.toString() == id.toString());
        // if (product) {
        //     return product;
        // }
        // return null;
        return await subjectModel.findById(id);//mongodb
    } catch (error) {
        console.log('>>> Error:', error);
        return null;
    }
}
const updateSubjectById = async (id, nameSubject, nameTeacher, categorySubject) => {
    try {
        // const product = data.find(item => item._id.toString() == id.toString());
        // if (product) {
        //     data = data.map(item => {
        //         if (item._id.toString() == id.toString()) {
        //             item.name = name ? name : item.name;
        //             item.price = price ? price : item.price;
        //             item.quantity = quantity ? quantity : item.quantity;
        //             item.image = image ? image : item.image;
        //             item.category = category ? category : item.category;

        //         }
        //         return item;
        //     });
        //     return true;
        // }
        // return false;
        const subject = await subjectModel.findById(id);
        if (subject) {
            subject.nameSubject = nameSubject ? nameSubject : subject.nameSubject;
            subject.nameTeacher = nameTeacher ? nameTeacher : subject.nameTeacher;
            subject.categorySubject = categorySubject ? categorySubject : subject.categorySubject;  
            await subject.save();
            return true;

        }
        return false;

    } catch (error) {
        console.log('>>> uopdate error', error);
        return false;
    }
}
module.exports={getAllSubject,addNewSubject,deleteSubjectById,getSubjectById,updateSubjectById,getSubject};

