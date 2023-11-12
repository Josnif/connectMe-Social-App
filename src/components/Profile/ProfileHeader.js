import { View, Text, ActivityIndicator, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const profilePictureWidth = Dimensions.get("window").width * 0.4;
const dummy_img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

const ProfileHeader = ({ user, isMe = false }) => {
  const router = useRouter();
  console.log(user.name);

  if (!user) {
    return <ActivityIndicator />
  }

  const signOut = async () => {
    console.log('sign out');
  }

  console.log(dummy_img);

  return (
    <View style={styles.container}>
      <Image source={{ uri: bg }} style={styles.bg}  />
      <Image source={{ uri: user?.image ?? dummy_img }} style={styles.image} />

      <Text style={styles.name}>{user.name}</Text>

      {isMe ? (
        <>
        
        </>
      ) : null }
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  bg: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -profilePictureWidth / 2
  },
  image: {
    width: profilePictureWidth,
    aspectRatio: 1,
    borderRadius: 500,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 5,
  }
});