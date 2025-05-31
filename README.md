# 🛍️ FitTwin - AI 기반 가상 피팅 쇼핑몰

> 체형 데이터를 활용한 맞춤형 온라인 쇼핑 경험을 제공하는 플랫폼

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4+-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-%5E0.73.0-blue.svg)](https://reactnative.dev/)



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
- 📸 **AI 기반 아바타 자동 생성**: 사용자의 전신 이미지를 업로드하면 앱 내에서 렌더링 및 피팅 적용

## 🛠️ 기술 스택

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **API**: RESTful API Architecture

### Frontend
- **Framework**: React Native (Expo 기반)  
- **Routing**: expo-router (파일 기반 라우팅)  
- **State Management**: React useState / useEffect 기반
- **API Handling**: axios (기본 인스턴스 설정 포함)
- **UI Components**: 기본 React Native + 커스텀 스타일링 (StyleSheet)
- **Navigation**: @react-navigation/native + expo-router (탭/스택 혼합)
- **Three.js**: 생성된 `.obj` 또는 `.glb` 모델 렌더링

### DevOps
- **Version Control**: Git & GitHub
- **Environment**: dotenv for environment variables

### AI / 3D 모델 처리
- **OpenPose**: 사용자 이미지에서 2D keypoint 추출
- **PIFuHD**: 단일 이미지 기반 3D 아바타 재구성 (Mesh 생성)


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
   # `.env` 파일 내용:
   ```
   ```env
   HTTP_PORT=5000
   HOST=localhost
   MONGODB_URI=mongodb://localhost:27017/fittwin
   ```

5. **MongoDB 실행**
   ```bash
   mkdir -p ~/mongodb_data
   mongod --dbpath ~/mongodb_data
   ```

6. **시드 데이터 추가 (선택사항)**
   ```bash
   node seeds/productSeeds.js
   ```

7. **서버 실행**
   ```bash
   npm start
   ```

### 프론트엔드 설정

1. **프론트엔드 의존성 설치**
   ```bash
   cd frontend
   npm install
   ```
2. **프론트엔드 실행**
   ```bash
   npm run web
   ```
   

# Expo 개발 서버 실행 (웹 포함)
cd frontend
npx expo start --tunnel

# Android 디바이스 연결 시
npm run android

# 웹에서 실행
npm run web

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
    ├── app/                    # 페이지 구성 (expo-router 기반)
    │   ├── (tabs)/             # 탭 네비게이션
    │   ├── product/            # 상품 관련 페이지
    │   │   └── [id].tsx        # 상품 상세
    │   └── avatar.tsx         # 아바타 페이지
    ├── components/             # 재사용 가능한 컴포넌트들
    ├── constants/              # 상수 정의
    ├── hooks/                  # 커스텀 훅
    ├── lib/                    # axios 인스턴스 등 라이브러리 설정
    ├── assets/                 # 이미지 및 리소스
    ├── scripts/                # 기타 스크립트 (예: seed script 호출)
    ├── app.json                # 앱 설정
    └── .gitignore              # 빌드/설치 파일 제외

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

## 🛒 프론트엔드 주요 구현 기능
- 하단 탭 네비게이션 구현 (상품 리스트 / 아바타)
- 상품 목록 표시 (카테고리 필터 포함)
- 상품 상세 페이지 구현 (이미지, 제목, 설명, 가격, 피팅 버튼)
- 아바타 피팅 API 연동 (POST /fitting)
- 예외처리 및 로딩 상태 처리

## 📽️ 시연 영상(2025.05.31. 기준)

[![시연 영상](https://img.youtube.com/vi/kq1Hx8Iqd54/0.jpg)](https://youtube.com/shorts/kq1Hx8Iqd54)


## 👥 팀원

- **강지석** - Backend Developer
  - Node.js 서버 개발
  - RESTful API 설계 및 구현
  - MongoDB 데이터베이스 설계
  
- **신승원** - Frontend Developer
  - React Native 앱 개발
  - UI/UX 구현
  - API 연동
- **박재민** – Frontend Developer / 3D 아바타 생성 담당
  - React Native 앱 개발
  - 사용자 체형 정보 기반 3D 아바타 생성 기능 구현
  - Three.js 및 @react-three/fiber를 활용한 아바타 모델 렌더링 및 회전/확대 등 인터랙션 처리
 
- **김기석** – Project Designer
  - 서비스 기획 및 전체 구조 설계
  - IR 피칭 자료 제작 및 발표
  - 앱 UI/UX 디자인 및 프로토타입 제작 (Figma)
  

## 🔮 향후 계획

- [ ] PIFuHD + OpenPose 기반 사용자 이미지 → 3D Mesh 변환 자동화 파이프라인 구축
- [ ] 아바타 생성 기능 API 연동
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
