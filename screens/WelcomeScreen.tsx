import React from 'react'
import { ImageBackground, View, Text,Image, TouchableHighlight } from 'react-native'
import { bg } from '../Sources'
import { logo } from '../Sources'
import { styles } from '../Styles'
import colors from '../config/colors'

const WelcomeScreen = (props: { ChangeView: Function }) => {

    return (
        <>
            <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} resizeMode="cover" style={styles.background}>
                <View style={styles.logoContainer}>
                    <Image source={{uri : "https://www.pngfind.com/pngs/m/123-1231657_nike-logo-transparent-work-boots-hd-png-download.png"}} style={styles.logo} />
                    <Text style={[styles.text]}>SUPER MEMO</Text>
                </View>
                <TouchableHighlight onPress={() => { console.log("switching pages"); props.ChangeView("home"); }} style={styles.loginButton}>
                        <View   />
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>console.log("Presed the logout  button")} style={styles.registerButton} >
                <View />
                </TouchableHighlight>
            </ImageBackground>
        </>

    )
}

export default WelcomeScreen