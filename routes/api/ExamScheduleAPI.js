const express = require('express');
const router = express.Router();
const examScheduleController=require('../src/ExamSchedule/ExamScheduleController');
//http://localhost:3000/api/exam-schedule/get-all
// api get all schedule 
router.get('/get-all', async (req, res, next) => {
    try {
        const examSchedules = await examScheduleController.getAllExamSchedule();
        return res.status(200).json({ error: false, examschedules: examSchedules });
    } catch (error) {
        return res.status(500).json({ error: true, examcchedules: null });
    }
});
//http://localhost:3000/api/exam-schedule/new
// api them moi lich hoc
router.post('/new',  async (req, res, next) => {
    try {
        let { body} = req;
        
        const { idmon, cathi, diadiem,ngaythi} = body;
        await examScheduleController.addNewExamSchedule(idmon,cathi,diadiem,ngaythi);
        return res.status(200).json({ error: false, examschedules: body });
    } catch (error) {
        console.log('add product by name error', error);
        return res.status(500).json({ error: true, examschedules: null });
    }
});
//http://localhost:3000/api/exam-schedule/:id/delete
router.post('/:id/delete', async (req, res, next) => {
    try {
        const { id } = req.params;
        await examScheduleController.deleteExamScheduleById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false });
    }

});


module.exports=router;
