import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems : "center"
    },
    header: {
      flex: 1,
      width: '50%',
      height : '50%',
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent : 'center'
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems : "center"
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems : "center"
    },
  image: {
    width: '100%',
    height : '100%',
      flex: 1,
      justifyContent: "center"   
  },
    loginButton: {
      width: '100%',
      height: 70,
      backgroundColor : "#fc5c65"
    },
    registerButton: {
      width: '100%',
      height: 70,
      backgroundColor : "#4ecdc4"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    contentcenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      position: 'absolute',
      top : 70,
      }
  });