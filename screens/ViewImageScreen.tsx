import React from 'react'
import { ImageBackground, View,Image, StyleSheet } from 'react-native'
import { bg } from '../Sources'
import { chair } from '../Sources'
import { styles } from '../Styles'
import colors from '../config/colors'
const ViewImageScreen = () => {
  return (
    <>
      <View style={viewStyles.container}>
        <View style={viewStyles.closeIcon}></View>
        <View style={viewStyles.deleteIcon}></View>
      <Image resizeMode='contain' style={styles.image} source={{ uri: "https://reactjs.org/logo-og.png" }} />

      </View>

        </>
  )
}

const viewStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex : 1, 
  },
  closeIcon: {
    width: 50,
    height:  50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left : 30
  },
  deleteIcon: {
    width: 50,
    height:  50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right : 30
  },
})
export default ViewImageScreen