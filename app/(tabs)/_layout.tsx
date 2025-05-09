import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require('@/assets/images/futevolei.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  // Solicita permissão ao abrir o app
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permissão negada", "Você precisa permitir acesso à galeria para selecionar imagens.");
      }
    })();
  }, []);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert("Nenhuma imagem selecionada", "Você não selecionou uma imagem!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clube do futevôlei</Text>

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Escolher imagem" onPress={pickImageAsync} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  footerContainer: {
    marginBottom: 30,
  },
});
