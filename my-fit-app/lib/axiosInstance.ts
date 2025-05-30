// lib/axiosInstance.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 📌 실제 실행환경에서는 로컬 IP로 교체 필요
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
