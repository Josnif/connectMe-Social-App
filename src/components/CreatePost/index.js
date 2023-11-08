import { View, Text, Image, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
import styles from './style'
import * as ImagePicker from 'expo-image-picker'

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null)
  // const insets = useSafeAreaInsets();

  const onPost = () => {
    console.log("Post: ", description);
    setDescription("");
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result);
    if (!result.canceled) {
      setImage(result.uri);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
      // keyboardVerticalOffset={150}
    >
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>

        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      <TextInput 
        placeholder="What's on your mind?" 
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline 
      />
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.buttonContainer}>
        <Button onPress={onPost} title="Post" disabled={!description} />
      </View>

    </KeyboardAvoidingView>
  )
}

export default CreatePost