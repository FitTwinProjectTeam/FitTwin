const express = require('express');
const router = express.Router();
const Avatar = require('../models/Avatar');

// GET /api/avatar - 전체 아바타 목록 조회
router.get('/', async (req, res) => {
    try {
      const avatars = await Avatar.find().sort({ createdAt: -1 });
      res.json({ success: true, count: avatars.length, data: avatars });
    } catch (error) {
      res.status(500).json({ success: false, message: '아바타 목록을 불러오지 못했습니다.' });
    }
  });
  


//Post/api/avatar - 아바타 저장
router.post('/',async(req,res)=>{
    try{
        const avatar = new Avatar(req.body);
        await avatar.save();
        res.json({success:true, data : avatar});
    }catch(error){
        res.status(400).json({success:false, message: error.message});
    }
});

// GET /api/avatar/:id - 아바타 조회
router.get('/:id', async (req, res) => {
    try {
      const avatar = await Avatar.findById(req.params.id);
      if (!avatar) return res.status(404).json({ success: false, message: '아바타를 찾을 수 없습니다' });
      res.json({ success: true, data: avatar });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  });

module.exports = router;