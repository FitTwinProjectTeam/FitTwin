// backend/seeds/avatarSeeds.js

require('dotenv').config();
const mongoose = require('mongoose');
const Avatar = require('../models/Avatar');

const avatars = [
  {
    name: "홍길동",
    gender: "남성",
    height: 175,
    weight: 68,
    bodyShapeData: {
      shoulderWidth: 45,
      waist: 32,
      legLength: 90
    }
  },
  {
    name: "김민지",
    gender: "여성",
    height: 162,
    weight: 52,
    bodyShapeData: {
      shoulderWidth: 38,
      waist: 26,
      legLength: 85
    }
  }
];

const seedAvatars = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB 연결 성공');

    await Avatar.deleteMany({});
    console.log('기존 아바타 데이터 삭제 완료');

    const createdAvatars = await Avatar.insertMany(avatars);
    console.log(`${createdAvatars.length}개의 아바타 데이터 추가 완료`);

    await mongoose.connection.close();
    console.log('시드 작업 완료!');
  } catch (error) {
    console.error('시드 작업 실패:', error);
    process.exit(1);
  }
};

seedAvatars();
