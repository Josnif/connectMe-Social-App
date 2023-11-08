import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedPost from './src/components/FeedPost'

import posts from "./assets/data/posts.json";
import CreatePost from './src/components/CreatePost';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* <FlatList 
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      /> */}

      <CreatePost />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});