//backend/server.js
const dotenv = require('dotenv');
dotenv.config();
const HTTP_PORT = process.env.HTTP_PORT;
const HOST = process.env.HOST;

const{app} = require('./app');

//MongoDB 연결을 위한 모델 가져옴
const connectDB=require('./config/database');



// 서버 시작
app.listen(HTTP_PORT,HOST,()=>{
    console.log(`http://${HOST}:${HTTP_PORT}`);
})

//데이터베이스 연결
connectDB();