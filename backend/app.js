// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const productRoutes =require('./routes/productRoutes');
const avatarRoutes = require('./routes/avatarRoutes');
const fittingRoutes = require('./routes/fittingRoutes');

app.use('/api/avatar', avatarRoutes);
app.use('/api/fitting', fittingRoutes);
app.use('/api/products',productRoutes);

app.get('/',(req,res)=>{
    res.json({message:'FitTwin 백엔드 서버가 실행중입니다!'});

});

app.get('/',(req,res)=>{
    res.json({message: 'FitTwin 백엔드 서버가 실행중입니다!'});
})
module.exports = { app };