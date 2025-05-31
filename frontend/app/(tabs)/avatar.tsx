import { View, Text, Button, StyleSheet } from 'react-native';
import  AvatarComponent from '../../components/AvatarCompnent';

export default function AvatarScreen() {
  const handleCheckFittingResult = () => {
    // 나중에 fitting 결과 GET 요청으로 받아올 예정
    alert('여기에 피팅 결과 API 연결 예정!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👕 아바타 피팅 결과</Text>
      <View style={styles.avatarBox}>
        <AvatarComponent/>
      </View>
      <Button title="피팅 결과 불러오기" onPress={handleCheckFittingResult} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  avatarBox: {
    width: '100%',
    height: 300, 
    backgroundColor: '#eee',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

