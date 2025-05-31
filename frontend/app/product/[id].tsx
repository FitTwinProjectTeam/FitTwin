import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, Dimensions, TouchableOpacity } from 'react-native';
import api from '@/lib/axiosInstance';
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

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
        avatarId: 'example-avatar-id',
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
      <View style={styles.bodyWrapper}>
        <View style={styles.sectionContainer}>
          <View style={[styles.sectionBox, styles.imageBox]}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>

          <View style={[styles.sectionBox, styles.textBox]}>
            <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.5}>{product.title}</Text>
            <Text style={styles.price} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}>{product.price.toLocaleString()}원</Text>
          </View>

          <View style={[styles.sectionBox, styles.detailBox]}>
            <Text style={styles.description} numberOfLines={6} adjustsFontSizeToFit minimumFontScale={0.5}>{product.description}</Text>
            <Text style={styles.meta} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}>카테고리: {product.category}</Text>
            <Text style={styles.meta} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}>재고: {product.stock}</Text>
          </View>

          <View style={styles.sectionBox}>
            <TouchableOpacity style={styles.fittingButton} onPress={handleFitting}>
              <View style={styles.fittingButtonColumn}>
                <Ionicons name="person-outline" size={36} color="black" style={styles.fittingIconTop} />
                <Text style={styles.fittingButtonTextSmall}>아바타 피팅하기</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
      <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sectionBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    elevation: 3,
    marginBottom: 12,
  },
  imageBox: {
    flex: 7,
  },
  textBox: {
    flex: 2.4,
  },
  detailBox: {
    flex: 2.8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 17,
    color: 'black',
    marginTop: 1,
  },
  description: {
    fontSize: 13,
    color: 'black',
    marginBottom: 3,
  },
  meta: {
    fontSize: 13,
    color: 'black',
    marginBottom: 4,
  },
 fittingButton: {
  backgroundColor: '#E0F2FF',  // 연한 하늘색 배경
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#4AA8D8',      // 진한 파랑 테두리
  elevation: 5,                // 그림자 강조
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
},

  bottomBar: {
    height: 40,
    backgroundColor: 'black',
  },
fittingButtonColumn: {
  alignItems: 'center',
  justifyContent: 'center',
},
fittingIconTop: {
  marginBottom: 4,
},
fittingButtonTextSmall: {
  color: '#1E3A8A', // 진한 파랑색
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},


});


export const options = {
  title: '상품 상세정보',
  headerTintColor: 'black',
  headerTitleStyle: { color: 'transparent' },
};
