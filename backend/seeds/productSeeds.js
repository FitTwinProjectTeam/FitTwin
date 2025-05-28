// backend/seeds/productSeeds.js

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// 테스트용 상품 데이터
const products = [
    {
        title: "클래식 화이트 티셔츠",
        image: "https://via.placeholder.com/300x400/ffffff/000000?text=White+T-Shirt",
        price: 29000,
        description: "편안한 착용감의 베이직 화이트 티셔츠입니다. 100% 순면 소재로 제작되었습니다.",
        category: "상의",
        stock: 50
    },
    {
        title: "슬림핏 블랙 진",
        image: "https://via.placeholder.com/300x400/000000/ffffff?text=Black+Jeans",
        price: 59000,
        description: "모던한 실루엣의 슬림핏 블랙 진입니다. 신축성 있는 소재로 활동성이 좋습니다.",
        category: "하의",
        stock: 30
    },
    {
        title: "캐주얼 후드 집업",
        image: "https://via.placeholder.com/300x400/808080/ffffff?text=Hoodie",
        price: 79000,
        description: "데일리로 입기 좋은 후드 집업입니다. 부드러운 기모 안감으로 따뜻합니다.",
        category: "아우터",
        stock: 20
    }
];

// 데이터베이스에 시드 데이터 삽입
const seedProducts = async () => {
    try {
        // MongoDB 연결
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB 연결 성공');
        
        // 기존 데이터 삭제
        await Product.deleteMany({});
        console.log('기존 상품 데이터 삭제 완료');
        
        // 새 데이터 삽입
        const createdProducts = await Product.insertMany(products);
        console.log(`${createdProducts.length}개의 상품 데이터 추가 완료`);
        
        // 연결 종료
        await mongoose.connection.close();
        console.log('시드 작업 완료!');
        
    } catch (error) {
        console.error('시드 작업 실패:', error);
        process.exit(1);
    }
};

// 실행
seedProducts();