import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import api from '@/lib/axiosInstance';

interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  isAvailable: boolean;
  createdAt: string;
}

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.error('상품 상세 정보 불러오기 실패:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleFitting = async () => {
    try {
      const res = await api.post('/fitting', {
        productId: id,
        avatarId: 'example-avatar-id', // 나중에 실제 값으로 교체
      });
      Alert.alert('피팅 성공', `결과: ${res.data.result}`);
    } catch (error) {
      console.error('피팅 실패:', error);
      Alert.alert('오류', '피팅 요청 중 오류 발생');
    }
  };

  if (!product) return <Text>로딩 중...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price.toLocaleString()}원</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.meta}>카테고리: {product.category}</Text>
      <Text style={styles.meta}>재고: {product.stock}</Text>
      <Text style={styles.meta}>생성일: {new Date(product.createdAt).toLocaleDateString()}</Text>
      <Button title="아바타 피팅하기" onPress={handleFitting} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, color: 'green', marginVertical: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  meta: { fontSize: 14, color: '#555', marginBottom: 4 },
});
