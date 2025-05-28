// backend/config/database.js
//mongoDB
const mongoose = require('mongoose');

//MongoDB 연결 함수
const connectDB = async()=>{
    try{
        //MongoDB연결
        await mongoose.connect(process.env.MONGODB_URI);
            console.log('MongoDB 연결 성공');
            console.log(`연결된 DB: ${mongoose.connection.name}`);
        

        

    }catch(error){
        console.error('MongoDB 연결실패:',error.message);

        process.exit(1);
    }
};

// 연결 이벤트 리스터
mongoose.connection.on('disconnected',()=>{
    console.log('MongoDb 연결이 끊겼습니다.');
});

mongoose.connection.on('error',(err)=>{
    console.error('MongoDB 에러:',err);
});

module.exports= connectDB;