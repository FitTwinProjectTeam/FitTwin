import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import api from '@/lib/axiosInstance';

interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
}

export default function ProductListScreen() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data.data);
      } catch (err) {
        console.error('상품 불러오기 실패:', err);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push({ pathname: '/product/[id]', params: { id: item._id } })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price.toLocaleString()}원</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 16 },
  itemContainer: {
    marginBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 12,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  productTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 4,
  },
});
