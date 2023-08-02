const express = require('express');
const router = express.Router();
const scheduleController=require('../src/Schedule/ScheduleController');
//http://localhost:3000/api/schedule/get-all
// api get all schedule 
router.get('/get-all', async (req, res, next) => {
    try {
        const schedules = await scheduleController.getAllSchedule();
        return res.status(200).json({ error: false, schedules: schedules });
    } catch (error) {
        return res.status(500).json({ error: true, schedules: null });
    }
});
//http://localhost:3000/api/schedule/new
// api them moi lich hoc
router.post('/new',  async (req, res, next) => {
    try {
        let { body} = req;
        
        const { subject, cahoc, diadiem,ngayhoc} = body;
        await scheduleController.addNewSchedule(subject,cahoc,diadiem,ngayhoc);
        return res.status(200).json({ error: false, schedules: body });
    } catch (error) {
        console.log('add product by name error', error);
        return res.status(500).json({ error: true, schedules: null });
    }
});


module.exports=router;
