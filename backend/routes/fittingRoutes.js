const express = require('express');
const router = express.Router();
const FittingResult = require('../models/FittingResult');
// GET /api/fitting - 전체 피팅 결과 목록 조회
router.get('/', async (req, res) => {
    try {
      const results = await FittingResult.find()
        .populate('avatarId')
        .populate('productId')
        .sort({ createdAt: -1 });
  
      res.json({ success: true, count: results.length, data: results });
    } catch (error) {
      console.error('피팅 결과 목록 조회 실패:', error.message);
      res.status(500).json({ success: false, message: '피팅 결과 목록 조회 실패' });
    }
  });
  
// POST /api/fitting - 피팅 결과 저장
router.post('/', async (req, res) => {
  try {
    const fitting = new FittingResult(req.body);
    await fitting.save();
    res.json({ success: true, data: fitting });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET /api/fitting/:avatarId/:productId - 피팅 결과 조회
router.get('/:avatarId/:productId', async (req, res) => {
  try {
    const result = await FittingResult.findOne({
      avatarId: req.params.avatarId,
      productId: req.params.productId
    }).populate('avatarId').populate('productId');

    if (!result) return res.status(404).json({ success: false, message: '피팅 결과 없음' });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
