import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const AppHeader = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.headerTitle}>
                connect
                <Text style={styles.headerColorTitle}>Me</Text>
            </Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
            <AntDesign name="search1" size={18} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    headerTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
    },
    headerColorTitle: {
        color: '#1B26EC',
    },
    searchButton: {
        backgroundColor: '#ddd',
        borderRadius: 30,
        padding: 5,
    },
});