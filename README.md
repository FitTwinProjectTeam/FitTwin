# 🛍️ FitTwin - AI 기반 가상 피팅 쇼핑몰

> 체형 데이터를 활용한 맞춤형 온라인 쇼핑 경험을 제공하는 플랫폼

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📌 프로젝트 소개

FitTwin은 사용자의 체형 데이터를 기반으로 가상 피팅 서비스를 제공하는 온라인 쇼핑몰입니다. 
온라인 쇼핑 시 사이즈 선택의 어려움을 해결하고, 개인 맞춤형 쇼핑 경험을 제공합니다.

### 주요 해결 과제
- 온라인 의류 구매 시 사이즈 불일치 문제
- 반품률 감소를 통한 비용 절감
- 개인화된 쇼핑 경험 제공

## ✨ 주요 기능

- 👤 **아바타 생성**: 사용자 체형 정보 기반 3D 아바타 생성
- 👕 **가상 피팅**: 실시간 의류 피팅 시뮬레이션
- 🛒 **상품 관리**: 다양한 카테고리의 의류 상품 브라우징


## 🛠️ 기술 스택

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **API**: RESTful API Architecture

### Frontend
- **Framework**: React Native
- **State Management**: [사용 중인 상태관리 라이브러리]
- **UI Components**: [사용 중인 UI 라이브러리]

### DevOps
- **Version Control**: Git & GitHub
- **Environment**: dotenv for environment variables

## 📡 API Endpoints

### 상품 관련 API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | 전체 상품 목록 조회 |
| GET | `/api/products/:id` | 특정 상품 상세 조회 |

### 아바타 관련 API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/avatar` | 전체 아바타 목록 조회 |
| POST | `/api/avatar` | 새 아바타 생성 |
| GET | `/api/avatar/:id` | 특정 아바타 조회 |

### 피팅 관련 API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/fitting` | 전체 피팅 결과 조회 |
| POST | `/api/fitting` | 피팅 결과 저장 |
| GET | `/api/fitting/:avatarId/:productId` | 특정 피팅 결과 조회 |

## 🚀 시작하기

### 필요 사항
- Node.js (v14 이상)
- MongoDB (v4.4 이상)
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
   ```bash
   git clone https://github.com/FitTwinProjectTeam/FitTwin.git
   cd FitTwin
   ```

2. **백엔드 의존성 설치**
   ```bash
   cd backend
   npm install
   ```

3. **환경 변수 설정**
   ```bash
   # .env 파일 생성
   cp .env.example .env
   ```
   
   `.env` 파일 내용:
   ```
   HTTP_PORT=5000
   HOST=localhost
   MONGODB_URI=mongodb://localhost:27017/fittwin
   ```

4. **MongoDB 실행**
   ```bash
   mongod
   ```

5. **시드 데이터 추가 (선택사항)**
   ```bash
   node seeds/productSeeds.js
   ```

6. **서버 실행**
   ```bash
   npm start
   ```

### 프론트엔드 설정

1. **의존성 설치**
   ```bash
   cd frontend
   npm install
   ```

2. **앱 실행**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## 📁 프로젝트 구조

```
FitTwin/
├── backend/
│   ├── models/
│   │   ├── Avatar.js        # 아바타 스키마
│   │   ├── Product.js       # 상품 스키마
│   │   └── FittingResult.js # 피팅 결과 스키마
│   ├── routes/
│   │   ├── avatarRoutes.js  # 아바타 관련 라우트
│   │   ├── productRoutes.js # 상품 관련 라우트
│   │   └── fittingRoutes.js # 피팅 관련 라우트
│   ├── config/
│   │   └── database.js      # MongoDB 연결 설정
│   ├── seeds/
│   │   └── productSeeds.js  # 시드 데이터
│   ├── app.js               # Express 앱 설정
│   ├── server.js            # 서버 엔트리 포인트
│   └── package.json
└── frontend/
    └── [React Native 프로젝트 구조]
```

## 📊 데이터베이스 스키마

### Product Schema
```javascript
{
  title: String,
  image: String,
  price: Number,
  description: String,
  category: Enum['상의', '하의', '아우터', '신발', '액세서리', '셋업', '기타'],
  stock: Number,
  isAvailable: Boolean
}
```

### Avatar Schema
```javascript
{
  name: String,
  gender: Enum['남성', '여성'],
  height: Number,
  weight: Number,
  bodyShapeData: Object,
  createdAt: Date
}
```

### FittingResult Schema
```javascript
{
 avatarId: ObjectId (ref: 'Avatar'),
 productId: ObjectId (ref: 'Product'),
 fitScore: Number,      // AI 피팅 점수
 fitComment: String,    // 분석 코멘트
 imageURL: String,      // 피팅 시뮬레이션 이미지
 createdAt: Date
}
```

## 🖼️ 스크린샷

[프로젝트 스크린샷 추가 예정]

## 👥 팀원

- **[당신의 이름]** - Backend Developer
  - Node.js 서버 개발
  - RESTful API 설계 및 구현
  - MongoDB 데이터베이스 설계
  
- **[친구 이름]** - Frontend Developer
  - React Native 앱 개발
  - UI/UX 구현
  - API 연동

## 🔮 향후 계획

- [ ] 실시간 3D 피팅 렌더링 구현
- [ ] 사용자 리뷰 및 평점 시스템
- [ ] 가상 아바타 저장 및 관리
- [ ] 결제 시스템 통합
- [ ] 소셜 로그인 기능
- [ ] 추천 알고리즘 고도화
- [ ] 관리자 대시보드 구현

## 🐛 문제 해결

### MongoDB 연결 오류
```bash
# MongoDB 서비스 시작
sudo service mongod start
```

### 포트 충돌 시
```bash
# .env 파일에서 포트 변경
HTTP_PORT=3000
```

## 📄 라이선스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 문의

- Email: your.email@example.com
- Issue: [GitHub Issues](https://github.com/yourusername/FitTwin/issues)

---

<p align="center">Made with ❤️ by FitTwin Team</p>
