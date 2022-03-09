import React from 'react'
import { ImageBackground, View,Image, StyleSheet, Text} from 'react-native'
import { bg } from '../Sources'
import { chair } from '../Sources'
import { styles } from '../Styles'
import colors from '../config/colors'
const Home = (props: {ChangeView : Function}) => {
  return (
    <>
            <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} resizeMode="cover" style={styles.background}>
                <View style={styles.logoContainer}>
                    <Image source={{uri : "https://www.pngfind.com/pngs/m/123-1231657_nike-logo-transparent-work-boots-hd-png-download.png"}} style={styles.logo} />
                    <Text style={[styles.text]}>SUPER MEMO</Text>
                </View>
            </ImageBackground>
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
export default Home;