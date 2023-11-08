import { Text, Image, View, Pressable } from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from 'react';

import LikeImage from "../../../assets/images/like.png";
import styles from './styles';


export default function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{ uri: post.User.image }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </View>

      {/* Post body with description and image */}
      <Text style={styles.description}>{post.description}</Text>
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <View style={styles.footer}>
        {/* Stats row */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>

        {/* Buttons row */}
        <View style={styles.buttonsRow}>
          {/* Like button */}
          <Pressable 
            style={styles.iconButton}
            onPress={() => setIsLiked(!isLiked)}
          >
            <AntDesign 
              name="like2" 
              size={18} 
              color={isLiked ? 'royalblue' : 'gray'} 
            />
            <Text style={[
              styles.iconButtonText, 
              {color: isLiked ? 'royalblue' : 'gray'}
            ]}>
              Like
            </Text>
          </Pressable>

          {/* Comment button */}
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          {/* Share button */}
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>

        </View>

      </View>

    </View>
  );
}

