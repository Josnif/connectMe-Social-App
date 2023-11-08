import { ScrollView, FlatList } from 'react-native'

import FeedPost from '../components/FeedPost'
import posts from "../../assets/data/posts.json";



const feeds = () => {
  return (

    <ScrollView style={{marginTop: 20}}>
      <FeedPost post={post1} />
      <FeedPost post={post2} />
      <FeedPost post={post3} />
      
    </ScrollView>
  )
}

export default feeds