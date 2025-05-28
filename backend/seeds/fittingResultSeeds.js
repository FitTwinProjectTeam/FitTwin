// backend/seeds/fittingResultSeeds.js

require('dotenv').config();
const mongoose = require('mongoose');
const Avatar = require('../models/Avatar');
const Product = require('../models/Product');
const FittingResult = require('../models/FittingResult');

const seedFittingResults = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB 연결 성공');

    const avatar = await Avatar.findOne(); // 첫 번째 아바타
    const product = await Product.findOne(); // 첫 번째 상품

    if (!avatar || !product) {
      throw new Error('아바타 또는 상품이 존재하지 않습니다. 먼저 seed를 실행해주세요.');
    }

    await FittingResult.deleteMany({});
    console.log('기존 피팅 결과 삭제 완료');

    const fittingResults = [
      {
        avatarId: avatar._id,
        productId: product._id,
        fitScore: 87,
        fitComment: '신체 비율에 잘 맞는 상품입니다.',
        imageURL: 'https://via.placeholder.com/400x600?text=Fitting+Preview'
      }
    ];

    const createdResults = await FittingResult.insertMany(fittingResults);
    console.log(`${createdResults.length}개의 피팅 결과 추가 완료`);

    await mongoose.connection.close();
    console.log('시드 작업 완료!');
  } catch (error) {
    console.error('시드 작업 실패:', error.message);
    process.exit(1);
  }
};

seedFittingResults();
