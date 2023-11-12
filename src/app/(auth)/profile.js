import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import FeedPost from '../../components/FeedPost';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { Stack } from 'expo-router';

import posts from '../../../assets/data/posts.json'
import user from '../../../assets/data/user.json';


const ProfileScreen = () => {
    
  return (
    <>
    <Stack.Screen options={{
      headerTitle: "Profile",
      headerShown: true,
    }} />
    <View style={styles.container}>
      <FlatList 
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} />}
        ListHeaderComponent={() => (
          <ProfileHeader user={user} />
        )}
      />
    </View>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});