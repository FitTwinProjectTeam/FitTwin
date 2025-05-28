// backend/routes/productRoutes.js
// 상품 api

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get/api/products - 모든 상품 조회
router.get('/',async(req,res)=>{
    try{
        //판매 가능한 상품만 조회
        const products = await Product.find({isAvailable:true})
            .select('title image price category') // 필요한 필드만 선택
            .sort({createdAt:-1}); // 최신순 정렬
        
        res.json({
            success:true,
            count : products.length,
            data : products
        });
    } catch(error){
        console.error('상품 목록 조회 에러:',error);
        res.status(500).json({
            success:false,
            message:'상품 목록을 불로오는데 실패했습니다.'
        });
    }
});
// GET /api/products/:id - 특정 상품 상세 조회
router.get('/:id', async(req,res)=>{
    try{
        const prodcut = await Product.findById(req.params.id);

        // 상품이 없는 경우
        if(!prodcut){
            return res.status(404).json({
                success:false,
                message:'해당 상품을 찾을 수 없습니다.'
            });
        }

        res.json({
            success: true,
            data:product
        });

    }catch (error) {
        console.error('상품 상세 조회 에러:',error);

        // 잘못된 id 형식인 경우
        if(error.name === 'CastError'){
            return res.status(400).json({
                success: false,
                message:'잘못된 상품 ID입니다.'
            })
        }

        res.status(500).json({
            success:false,
            message:'상품 정보를 불러오는데 실패했습니다.'
        });
    }
});

module.exports = router;

