import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import CreatePost from '../../components/CreatePost'

const CreatePostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <CreatePost />
    </SafeAreaView>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});