// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: '상품 리스트',
        }}
      />
      <Tabs.Screen
        name="avatar"
        options={{
          title: '아바타',
        }}
      />
    </Tabs>
  );
}
