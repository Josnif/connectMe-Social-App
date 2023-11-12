import { StyleSheet, View, Text, FlatList, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'

import FeedPost from '../../components/FeedPost';

import posts from "../../../assets/data/posts.json";
import { Stack, useRouter } from 'expo-router';
import AppHeader from '../../components/AppHeader';

const HomeScreen = () => {
  const img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: "connectMe"
        }}
      />
      <StatusBar style="auto" />

      <FlatList 
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <AppHeader />
            <View style={styles.header}>
              <Pressable onPress={() => router.push('profile')}>
                <Image source={{ uri: img }} style={styles.profileImage} />
              </Pressable>
              <Pressable onPress={() => router.push('create-post')} style={styles.postArea} >
                <Text style={styles.name}>What's on your mind?</Text>
                <Entypo
                  name="images"
                  size={24}
                  color="limegreen"
                  style={styles.icon}
                />
              </Pressable>
            </View>
          </>
        )}
      />

      {/* <CreatePost /> */}
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  postArea : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});