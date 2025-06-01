import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei/native';

export default function AvatarComponent() {
  const [objModel, setObjModel] = useState(null);
  
  useEffect(() => {
    (async () => {
      const asset = Asset.fromModule(require('../assets/objects/myphoto.obj'));
      await asset.downloadAsync();
      
      const response = await fetch(asset.uri);
      const text = await response.text();
      
      const loader = new OBJLoader();
      const object = loader.parse(text);
      setObjModel(object);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={true} enablePan={true} minDistance={1} maxDistance={10} />
        {objModel && <primitive object={objModel} scale={2} />}
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%'},
});
