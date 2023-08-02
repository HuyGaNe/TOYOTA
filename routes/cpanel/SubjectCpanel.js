const express = require('express');
const router = express.Router();
const subjectController = require('../../routes/src/MonHoc/SubjectController');

//http://localhost:3000/cpanel/subject
// hien thi trang danh sach san pham
router.get('/', async (req, res, next) => {
    const subject = await subjectController.getAllSubject_V2();
    res.render('subject/subject', { subject });
});
//http://localhost:3000/cpanel/subject/new
//hien thi form them mon hoc
router.get('/new',async(req,res,next)=>{
    try {
        return res.render('subject/new');
    } catch (error) {
        console.log(error);
    }
   
});

//http://localhost:3000/cpanel/subject/new
//xu li them mon hoc
router.post('/new',async(req,res,next)=>{
    try {

        let body = req; 
        const{nameSubject,nameTeacher,categorySubject}=body;
        
        const result = await subjectController.addNewSubject(nameSubject,nameTeacher,categorySubject);     
        console.log("data:"+result);
        if(result){
            console.log("ngon");
           return res.redirect('/cpanel/subject');
         
        }else{
            return res.redirect('/cpanel/subject/new');
        }
    } catch (error) {
        next(error);
    }
   
});
//http://localhost:3000/cpanel/product/:id/delete
//xoa mon hoc theo id
// hien thi trang danh sach mon hoc
router.post('/:id/delete', async (req, res, next) => {
    try {
        const { id } = req.params;
        await subjectController.deleteProductById(id);
        return res.json({ status: true });
    } catch (error) {
        return res.json({ status: false });
    }

});
//http://localhost:3000/cpanel/subject/:id/edit
// hien thi trang thong tin chi tiet mon hoc
router.get('/:id/edit', async (req, res, next) => {
    try {
        const {id}=req.params;
        const subject=await subjectController.getSubjectById(id);
      
        return res.render('subject/edit',{subject});
    } catch (error) {
        next(error);
    }
});

//http://localhost:3000/cpanel/subject/:id/edit
//xu li cap nhat mon hoc
router.post('/:id/edit',async(req,res,next)=>{
    try {
        let {id}=req.params;
        let {body} = req;
        const{nameSubject,nameTeacher,categorySubject}=body;
        const result = await subjectController.updateSubjectById(id,nameSubject,nameTeacher,categorySubject);
       
        if(result){
           return res.redirect('/cpanel/subject');
        }else{
            return res.redirect(`/cpanel/subject/${id}/edit`);
        }
    } catch (error) {
        next(error);
    }
   
});

module.exports = router;