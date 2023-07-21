const express = require('express');
const router = express.Router();
const subjectController=require('../src/MonHoc/SubjectController')
const { checkTokenApp } = require('../../middle/Authen');
const upload = require('../../middle/UploadFile');

//http://localhost:3000/api/subject/get-all
// api get all subject 
router.get('/get-all', async (req, res, next) => {
    try {
        const subjects = await subjectController.getAllSubject_V2();
        
        return res.status(200).json({ error: false, subjects: subjects });
    } catch (error) {
        return res.status(500).json({ error: true, subjects: null });
    }
});
//http://localhost:3000/api/subject/new
// api them moi mon hoc
router.post('/new',  async (req, res, next) => {
    try {
        let { body} = req;
        
        const { nameSubject, nameTeacher, categorySubject} = body;
        await subjectController.addNewSubject(nameSubject,nameTeacher,categorySubject);
        return res.status(200).json({ error: false, subjects: body });
    } catch (error) {
        console.log('add product by name error', error);
        return res.status(500).json({ error: true, subjects: null });
    }
});



module.exports=router;