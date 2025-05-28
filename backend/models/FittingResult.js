// backend/models/FittingResult.js
const mongoose = require('mongoose');

const fittingResultSchema = new mongoose.Schema({
    avatarId: { type: mongoose.Schema.Types.ObjectId, ref: 'Avatar', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    fitScore: { type: Number, required: true }, // AI 피팅 점수
    fitComment: { type: String }, // 분석 코멘트
    imageURL: { type: String }, // 피팅 시뮬레이션 이미지
    createdAt: { type: Date, default: Date.now }
});

const FittingResult = mongoose.model('FittingResult',fittingResultSchema);
module.exports=FittingResult;