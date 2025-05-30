import { View, Text, StyleSheet, Button } from 'react-native';

export default function AvatarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👕 아바타 피팅 공간</Text>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>[ 여기에 AI 아바타가 들어갑니다 ]</Text>
      </View>
      <Button title="아바타 설정하기" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    height: 300,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 16,
  },
  avatarText: {
    fontSize: 16,
    color: '#777',
  },
});
