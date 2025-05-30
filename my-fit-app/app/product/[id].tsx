// app/product/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const mockProduct = {
  '1': {
    title: '후드티',
    image: require('@/assets/images/hoodie.png'),
    price: '₩25,000',
    description: '따뜻한 후드티입니다. 겨울에 딱이에요.',
    category: '상의',
    stock: 100,
    isAvailable: true,
    createdAt: '2025-05-30',
  },
  '2': {
    title: '반팔티',
    image: require('@/assets/images/tshirt.png'),
    price: '₩18,000',
    description: '여름용 시원한 반팔티입니다.',
    category: '상의',
    stock: 50,
    isAvailable: true,
    createdAt: '2025-05-25',
  },
  '3': {
    title: '청바지',
    image: require('@/assets/images/jeans.png'),
    price: '₩32,000',
    description: '편한 데님 청바지입니다.',
    category: '하의',
    stock: 80,
    isAvailable: false,
    createdAt: '2025-05-20',
  },
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = mockProduct[id as keyof typeof mockProduct];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>상품을 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.meta}>카테고리: {product.category}</Text>
      <Text style={styles.meta}>재고: {product.stock}개</Text>
      <Text style={styles.meta}>판매 상태: {product.isAvailable ? '판매중' : '품절'}</Text>
      <Text style={styles.meta}>생성일: {product.createdAt}</Text>

      <View style={styles.button}>
        <Button title="아바타 피팅하기" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 20,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 12,
  },
  meta: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  button: {
    marginTop: 20,
  },
});
