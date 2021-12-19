const express = require('express');
const UserControl = require('../controller/usercontrolle');
const router = express.Router()

//newUser
router.post('/add',UserControl.postNewUser )
//
//newManyUser
router.post('/addAll',UserControl.postManyNewUser )
//
// Model.find()
router.get('/search', UserControl.getFindUser);
// 

// Perform Classic Updates by Running Find, Edit, then Save
router.put('/Update', UserControl.putUpdateUser);
//

//Delete One Document Using model.findByIdAndRemove
router.delete('/Delete',UserControl.DeleteById);
//

module.exports =router