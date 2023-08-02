const { use } = require('../../index');
const scheduleModel=require('./ScheduleModel');
const bcrypt = require('bcryptjs');

const getAllSchedule=async()=>{
    try {
        //lay toan bo mon hoc
     
        return await scheduleModel.find();
        
    } catch (error) {
        console.log("loi me r") 
    }
}
const addNewSchedule = async (subject,cahoc, diadiem, ngayhoc) => {
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
        const newSchedule = {
            subject, cahoc, diadiem,ngayhoc
        }
        const p = new scheduleModel(newSchedule);
        await p.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
// xoa lich hoc theo id
const deleteScheduleById = async (id) => {
    try {
        // const index = data.findIndex(item => item._id.toString() == id.toString());
        // if (index >= 0) {
        //     data.splice(index, 1);
        //     return true;
        // }
        //return false
        await scheduleModel.findByIdAndDelete(id);// mongodb
        return true;
    } catch (error) {
        console.log('Delete product by Id error:', error);
        throw error;
        return false;
    }

}
module.exports={getAllSchedule,addNewSchedule,deleteScheduleById}