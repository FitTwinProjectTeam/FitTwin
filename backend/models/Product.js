// backend/models/Product.js

const mongoose = require('mongoose');

//상품 스키마 정의
const productSchema = new mongoose.Schema({
    // 상품 제목
    title :{
        type : String,
        required:[true,'상품 제목은 필수입니다'],
        tirm:true, // 앞뒤 공백 제거
        maxlength:[100,'상품 제목은 100자를 초과할수 없습니다']
    },

    //상품 이미지 URL
    image:{
        type: String,
        required:[true, '상품 이미지는 필수입니다'],
        trim:true
    },

    // 상품 가격
    price :{
        type:Number,
        required:[true,'상품 가격은 필수입니다'],
        min:[0,'가격은 0원 이상이어야 합니다']
    },

    // 상품 상세 설명
    description:{
        type:String,
        required:[true,'상품 설명은 필수입니다'],
        maxlength:[1000, '상품 설명은 1000자를 초과할수 없습니다']
    },

    //상품 카테고리
    category:{
        type:String,
        enum:['상의','하의','아우터','신발','액세서리','기타'],
        default:'기타'
    },

    //재고 수량
    stock:{
        type:Number,
        default:100,
        min:[0,'재고는 0개 이상이어야 합니다']
    },

    //판매 상태
    isAvailable:{
        type:Boolean,
        default:true
    },

    // 생성시간
    createAt:{
        type:Date,
        default:Date.now
    }

});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;