import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import  {useState} from "react"
import { Button, ImageViewer } from './components';

import * as ImagePicker  from "expo-image-picker"

const placeholderImage = require("./assets/images/background-image.png")


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  const pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality:1,
    })


    if (!result.canceled){
      console.log(result)
      setSelectedImage(result.assets[0].uri)
    } else ("you didnt select any image")
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
     <ImageViewer placeholderImage={placeholderImage} selectedImage={selectedImage} />
      </View>

      {/* button */}
      <View style={styles.footerContainer}>
        <Button theme="primary" onPress={pickImageAsync} label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer:{
    flex:1,
    paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

});
