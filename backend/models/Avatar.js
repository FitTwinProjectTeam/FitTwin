// backend/models/Avatar.js
const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
    name :{
        type : String,
        required:[true, '이름 입력은 필수입니다'],
        trim : true
    },

    gender:{
        type : String,
        enum:['남성','여성'],
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type :Number,
        required:true
    },
    bodyShapeData:{
        type:Object,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Avatar = mongoose.model('Avatar',avatarSchema);
module.exports=Avatar;