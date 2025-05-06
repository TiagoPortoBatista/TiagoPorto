import { View, StyleSheet, } from "react-native";
import ImageViewer from '@/components/imageViewer';
import Button from '@/components/Button';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/opel.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Nenhuma imagem foi selecionada');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        </View>
       <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha" onPress={pickImageAsync} />
          <Button label="Use" />
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134761',
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});