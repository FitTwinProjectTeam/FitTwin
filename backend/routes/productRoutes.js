const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ✅ GET /api/products - 전체 상품 조회 + category 필터링
router.get('/', async (req, res) => {
    try {
        const filter = { isAvailable: true };

        // 쿼리 파라미터로 카테고리가 오면 필터 추가
        if (req.query.category) {
            filter.category = req.query.category;
        }

        const products = await Product.find(filter)
            .select('title image price category')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        console.error('상품 목록 조회 에러:', error);
        res.status(500).json({
            success: false,
            message: '상품 목록을 불러오는데 실패했습니다.',
        });
    }
});

// ✅ GET /api/products/:id - 단일 상품 조회
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: '해당 상품을 찾을 수 없습니다.',
            });
        }

        res.json({
            success: true,
            data: product,
        });
    } catch (error) {
        console.error('상품 상세 조회 에러:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: '잘못된 상품 ID입니다.',
            });
        }

        res.status(500).json({
            success: false,
            message: '상품 정보를 불러오는데 실패했습니다.',
        });
    }
});

module.exports = router;
