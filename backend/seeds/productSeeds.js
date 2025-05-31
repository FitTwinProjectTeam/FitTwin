// backend/seeds/productSeeds.js

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// 실제 상품 데이터
const products = [
    {
        title: "NBNAF21503 / UNI 초경량 바람막이 (BLACK)",
        image: "https://img.29cm.co.kr/next-product/2025/03/20/0d58a4b131e04fa9a3cde2d090336423_20250320151759.jpg?width=700&format=webp",
        price: 129000,
        description: "초경량 소재로 제작된 실용적인 바람막이입니다. 간절기에 착용하기 좋으며 휴대가 간편합니다.",
        category: "아우터",
        stock: 25
    },
    {
        title: "트윌 워크 재킷 Olive",
        image: "https://img.29cm.co.kr/next-product/2024/11/26/8a58bf4a864642029bf166399d7f41a4_20241126085039.jpg?width=700&format=webp",
        price: 169100,
        description: "클래식한 디자인에 투웨이 지퍼 사양을 갖춰 다양한 연출이 가능합니다. 내구성이 뛰어난 트윌 소재로 제작되었습니다.",
        category: "아우터",
        stock: 15
    },
    {
        title: "Short Sleeve Comfort Polo Knit - 24 Color",
        image: "https://img.29cm.co.kr/item/202505/11f0307de321beddb1708f5bbb83e34e.jpg?width=700&format=webp",
        price: 159000,
        description: "여름철에도 쾌적하게 착용 가능합니다. 지난 시즌보다 내구성과 착용감을 크게 개선하여 오랜 시간 변형 없이 입을 수 있습니다.",
        category: "상의",
        stock: 40
    },
    {
        title: "LONELY/LOVELY SALT WASHING HOODIE ZIP-UP NAVY",
        image: "https://img.29cm.co.kr/item/202503/11effa3718e54b2bacea55d4a288b891.jpg?width=700&format=webp",
        price: 187200,
        description: "25S/S 시즌 컨셉으로 뉴욕의 복잡한 거리에서 영감을 받아 제작된 워시드 후드 집업입니다. 빈티지한 감성과 현대적인 실루엣이 조화를 이룹니다.",
        category: "상의",
        stock: 20
    },
    {
        title: "[SAINT YEAR] 세미 오버 핏 셋업 수트_BLACK",
        image: "https://img.29cm.co.kr/item/202404/11ef05f5675e3c2fb9bb2ddce3091e32.jpg?width=700&format=webp",
        price: 178200,
        description: "SAINT YEAR 스트레치 평직 T/R 원단으로 제작된 세미 오버핏 입니다. 편안한 착용감과 세련된 실루엣을 동시에 제공합니다.",
        category: "셋업",  // 셋업은 기존 카테고리에 없으므로 '기타'로 분류
        stock: 10
    },
    {
        title: "페이디드 데님 트럭커 재킷 (BLUE)",
        image: "https://img.29cm.co.kr/next_product/2023/06/20/ed72c2c1-7b9b-46d9-8037-3afeeda9ea17_20230620162609.jpg?width=700&format=webp",
        price: 299900,
        description: "Polo 스타일의 거친 매력을 담은 트럭커 재킷으로, 견고한 페이드 데님과 미국산 하드웨어를 결합한 아이템입니다.",
        category: "아우터",
        stock: 12
    },
    {
        title: "프리미엄 베지터블 A-2 자켓 BLACK",
        image: "https://img.29cm.co.kr/item/202410/11ef8eec1cd5e369851903d8617299a8.jpg?width=700&format=webp",
        price: 350000,
        description: "공군 A-2 자켓을 현대적으로 재해석한 디자인입니다. 최고급 베지터블 가죽으로 제작되어 시간이 지날수록 멋스러워집니다.",
        category: "아우터",
        stock: 8
    },
    {
        title: "3M Thinsulate M-65 Fishtail Coat Padding Khaki",
        image: "https://img.29cm.co.kr/next-product/2019/11/12/4b17e4d804ad422eb147985f4569f415_20191112180243.jpg?width=700&format=webp",
        price: 134000,
        description: "'캐리오버' 상품의 M-51 Fishtail Coat를 방한 아우터 형식으로 제작한 3M Thinsulate M-51 Fishtail Coat Padding입니다.",
        category: "아우터",
        stock: 18
    },
    {
        title: "에어 라이트 래글런 윈드브레이커",
        image: "https://img.29cm.co.kr/item/202503/11eff8937f73059a8b6315d1ab6e7b24.jpg?width=700&format=webp",
        price: 59000,
        description: "가볍고 여유로운 실루엣의 초 경량 에어 라이트 래글런 윈드 브레이커입니다. 휴대가 간편하고 일상에서 활용도가 높습니다.",
        category: "아우터",
        stock: 35
    },
    {
        title: "nelly fringe short sleeve tweed jacket",
        image: "https://img.29cm.co.kr/item/202502/11efe5167186decc8521dd03419c4583.jpg?width=700&format=webp",
        price: 185600,
        description: "독특한 컬러감과 입체감의 트위드 원단으로 제작된 자켓입니다. 프린지 디테일이 포인트인 세련된 아이템입니다.",
        category: "아우터",
        stock: 15
    },
    {
        title: "크로쉐 썸머 니트 후드 집업 라이트그레이 MDCD040LGRAY",
        image: "https://img.29cm.co.kr/item/202503/11f003c63b4809c9b9e605124c870c8a.jpg?width=700&format=webp",
        price: 48600,
        description: "SS무드의 크로쉐 짜임의 텍스처가 돋보이는 니트 후드 집업입니다. 가벼운 소재로 여름에도 부담없이 착용 가능합니다.",
        category: "아우터",
        stock: 22
    },
    {
        title: "Button Point Half Sleeve Jacket SW4MJ773",
        image: "https://img.29cm.co.kr/item/202405/11ef17e7f57a1f27bb1479ae03bd2bd2.jpg?width=700&format=webp",
        price: 125300,
        description: "BUTTON POINT JACKET의 반팔 버전으로, 깔끔하게 떨어지는 테일러링이 돋보이는 자켓입니다.",
        category: "아우터",
        stock: 16
    },
    {
        title: "[2차재입고] tie halter top (gray)",
        image: "https://img.29cm.co.kr/item/202505/11f02ca89810f09db1703be02a763962.jpg?width=700&format=webp",
        price: 73000,
        description: "자연스럽게 묶어 뒷모습에 유니크한 모습을 강조할 수 있는 홀터 탑 제품입니다.",
        category: "아우터",  // 탑이므로 상의로 분류
        stock: 28
    },
    {
        title: "킥플렉스 크루넥 NM5MR04J_BLK",
        image: "https://img.29cm.co.kr/item/202502/11eff2889d3a1d21acea5d49becc5317.jpg?width=700&format=webp",
        price: 94400,
        description: "불굴의 탐험정신으로 세계 최고를 지향하다. 편안한 착용감과 활동성을 극대화한 크루넥입니다.",
        category: "상의",
        stock: 30
    },
    {
        title: "TF5-SH02 일리안 셔츠",
        image: "https://img.29cm.co.kr/item/202408/11ef65fc3800b8c4a9801d0d2ae04a2c.jpg?width=700&format=webp",
        price: 69500,
        description: "빈티지한 컬러감이 매력적인 블루 체크 셔츠로 티셔츠 등과 레이어드하여 멋스럽게 착용하기 좋은 제품입니다.",
        category: "상의",
        stock: 25
    },
    {
        title: "Writer Denim Shirt (Indigo)",
        image: "https://img.29cm.co.kr/item/202504/11f01c878b4fc9b6b1319367f7b9f48d.jpg?width=700&format=webp",
        price: 103000,
        description: "A/O.의 시그니처 아이템 Writer Denim Shirt입니다. 고퀄리티 데님 원단으로 제작되어 오래 입을수록 멋스러워집니다.",
        category: "상의",
        stock: 18
    },
    {
        title: "Crown Raive Graphic T-shirt VW5ME601",
        image: "https://img.29cm.co.kr/item/202504/11f01fd99f9065a0b1319f6d5498d1ea.jpg?width=700&format=webp",
        price: 58000,
        description: "레이브의 오리지널 아트워크 프린트 티셔츠입니다. 유니크한 그래픽 디자인이 돋보이는 아이템입니다.",
        category: "상의",
        stock: 35
    },
    {
        title: "알로하 착용_[스크런치 SET] 텐셀 글로우 시어셔츠",
        image: "https://img.29cm.co.kr/item/202504/11f01a6b120ba05cb1314bfaead82d96.jpg?width=700&format=webp",
        price: 72200,
        description: "부드러운 터치감의 텐셀 혼용 원단을 사용해 유연한 핏을 연출하는 셔츠입니다. 시원하고 가벼운 착용감이 특징입니다.",
        category: "상의",
        stock: 22
    },
    {
        title: "에딘 오프숄더 스웻셔츠 ( 피그먼트 차콜 )",
        image: "https://img.29cm.co.kr/item/202504/11f01351b4539327b170ab2c7bca9f12.jpg?width=700&format=webp",
        price: 62700,
        description: "적당한 두께감과 아방한 핏으로 다양한 코디가 가능하여 손이 자주 가는 아이템입니다.",
        category: "상의",
        stock: 20
    },
    {
        title: "브리즈 시스루 후드 니트_Marine Air",
        image: "https://img.29cm.co.kr/item/202505/11f02ef12b9e362889301b7f14a684a2.jpg?width=700&format=webp",
        price: 105000,
        description: "바디라인을 따라 드롭되는 래글런 슬리브 디자인과 하네만의 퓨어한 색감으로 연출한 후드니트입니다.",
        category: "상의",
        stock: 15
    },
    {
        title: "Lace Square Neck Blouse in White VW5MB123-01",
        image: "https://img.29cm.co.kr/item/202504/11f01fff76906017b170cf306265c4d3.jpg?width=700&format=webp",
        price: 110000,
        description: "얇은 소재감의 썸머무드가 느껴지는 블라우스입니다. 레이스 디테일이 여성스러운 분위기를 연출합니다.",
        category: "상의",
        stock: 18
    },
    {
        title: "W Bermuda Denim Pants, Indigo",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9yVEgb0iUCCaFMleHq-9cjd3ySGu7Di5EQLOWGjAlGB-20BxwpNZYvYutDGy9jkqGIc7XutqdmQfFaA45-uiXQ7frnmBIBAyjL9BXiP9rXIhZsTUba0VSd_g",
        price: 103600,
        description: "여유로운 실루엣의 인디고 컬러 버뮤다 데님 팬츠입니다.",
        category: "하의",
        stock: 20
    },
    {
        title: "UTILITY CARGO PANTS (BEIGE)",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbIumkTCdRt5cnHoE-su3XeFW5ajtAfk-iPLdriE5fhykKbcRRsZLBdzZzYB49BTbcHbnFJ763yT2sMxtzRZAf0uJvLPiUccMPZLbopmyj2fPdRZDImtaE",
        price: 79000,
        description: "실용성과 스타일을 모두 갖춘 유틸리티 카고 팬츠입니다.",
        category: "하의",
        stock: 25
    },
    {
        title: "TF2-PT03 코튼 린넨 스트링 팬츠 - 브라운",
        image: "https://img.29cm.co.kr/item/202504/11f02582ded25e13b170e15b1abf4577.jpg?width=700&format=webp",
        price: 89500,
        description: "가볍고 통기성 좋은 코튼 린넨 혼방 소재와 적당한 와이드 핏으로 여름철 시원하면서 내추럴하게 입기 좋은 팬츠입니다.",
        category: "하의",
        stock: 30
    },
    {
        title: "Santiago Slacks (Graphite)",
        image: "https://img.29cm.co.kr/item/202502/11eff4e8b47a2b628b63495acb27b239.jpg?width=700&format=webp",
        price: 164000,
        description: "A/O.의 대표적인 시그니처 아이템인 산티아고 팬츠의 포멀한 버전이라고 할 수 있는 Santiago slacks입니다.",
        category: "하의",
        stock: 15
    },
    {
        title: "나일론 원턱 팬츠_청록",
        image: "https://img.29cm.co.kr/next-product/2022/07/22/e2e98015564548df94e1ccba17e15d7c_20220722150358.jpg?width=700&format=webp",
        price: 44000,
        description: "많은 판매량과 후기가 증명한 슬로우 레코드 하우스의 스테디 셀러입니다.",
        category: "하의",
        stock: 35
    },
    {
        title: "COTTON SHEER PANTS_BLACK",
        image: "https://img.29cm.co.kr/item/202505/11f03dc294bfc1b397750bef4946f9e1.jpg?width=700&format=webp",
        price: 98100,
        description: "오가닉한 코튼 소재의 세미 와이드 팬츠입니다.",
        category: "하의",
        stock: 22
    },
    {
        title: "Natural Cotton Shorts - Ivory",
        image: "https://img.29cm.co.kr/next-product/2022/07/22/59362194ffe54e7a8bd75d8b46a4955d_20220722120325.jpg?width=700&format=webp",
        price: 43500,
        description: "적당히 힘있는 코튼 소재를 사용하여 실루엣 변형을 최소화한 팬츠입니다.",
        category: "하의",
        stock: 28
    },
    {
        title: "SIPT7078 투턱 나일론 슬랙스_White",
        image: "https://img.29cm.co.kr/next-product/2023/05/15/1782550c873c4c9dae49aa65eef37bb0_20230515211004.jpg?width=700&format=webp",
        price: 89000,
        description: "여름철 가볍고 편한 스타일에 부담없이 매치할수 있는 시원한 나일론 소재의 와이드 팬츠입니다.",
        category: "하의",
        stock: 18
    },
    {
        title: "와일드 부츠컷 레깅스",
        image: "https://img.29cm.co.kr/item/202504/11f01ff82746d7c2b13147a8d3277769.jpg?width=700&format=webp",
        price: 46000,
        description: "높은 밑위와 기장으로 더 길어보이는 레그라인으로 연출이 가능합니다.",
        category: "하의",
        stock: 32
    },
    {
        title: "Print Flared Pants Print Green",
        image: "https://img.29cm.co.kr/item/202404/11eefb2014963f169367b1e24a5b6c74.jpg?width=700&format=webp",
        price: 98000,
        description: "미드 라이즈, 롱 기장, 비침 방지 안감, 전체 오리지널 그래픽 프린트가 특징입니다.",
        category: "하의",
        stock: 20
    },
    {
        title: "REGULAR LOGO HALF SET-UP navy",
        image: "https://img.29cm.co.kr/next-product/2025/04/10/eaedcfba9e49437f903be8081c318426_20250410095419.jpg?width=700&format=webp",
        price: 99000,
        description: "유니섹스 세미 오버핏 반소매와 반바지 구성의 셋업입니다.",
        category: "셋업",
        stock: 20
    },
    {
        title: "[SET]Cut-Off Track Hoodie pants set-up",
        image: "https://img.29cm.co.kr/item/202502/11eff4ddf11ec56e8b63014d0d3ac41c.jpg?width=700&format=webp",
        price: 131000,
        description: "언제든 편하게 입을 수 있는 트레이닝 셋업입니다.",
        category: "셋업",
        stock: 25
    },
    {
        title: "Puff sleeve cropped jacket_two-tuck wide pants set_Navy",
        image: "https://img.29cm.co.kr/item/202404/11ef02c6c9dd7af493676961ddbdb9ae.jpg?width=700&format=webp",
        price: 179900,
        description: "입체적인 실루엣의 볼륨소매 크롭기장의 반팔 자켓 + 투턱 와이드 팬츠 세트입니다.",
        category: "셋업",
        stock: 15
    },
    {
        title: "W TERRY SET-UP navy",
        image: "https://img.29cm.co.kr/next-product/2025/03/26/e16215d0db344e04886bcfc8b58fe84c_20250326154515.jpg?width=700&format=webp",
        price: 99000,
        description: "여성 테리 반팔과 반바지 구성의 셋업입니다.",
        category: "셋업",
        stock: 22
    },
    {
        title: "SI 에센셜 셋업_Charcoal",
        image: "https://img.29cm.co.kr/item/202309/11ee4ae4d80f8a158a69bd1fc172d32d.jpg?width=700&format=webp",
        price: 170240,
        description: "포멀하면서 멋스러운 룩을 완성시켜줄 셋업입니다.",
        category: "셋업",
        stock: 18
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
        
        // 추가된 상품 확인
        console.log('\n추가된 상품 목록:');
        createdProducts.forEach((product, index) => {
            console.log(`${index + 1}. ${product.title} - ${product.price.toLocaleString()}원`);
        });
        
        // 연결 종료
        await mongoose.connection.close();
        console.log('\n시드 작업 완료!');
        
    } catch (error) {
        console.error('시드 작업 실패:', error);
        process.exit(1);
    }
};

// 실행
seedProducts();