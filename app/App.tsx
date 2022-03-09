import { StatusBar  } from 'expo-status-bar';
import { ImageBackground,Dimensions, StatusBar as TOP_BAR, StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import { styles } from '../Styles';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

let show: boolean = true;
export default function App() {
  // const orientation = useDeviceOrientation();
  const { landscape } = useDeviceOrientation();
  const dimensions = useDimensions();
  const SwitchView = () => {
    show = !show;
  }
  /*
      justifyContent : "center" sets the items centered over the PRIMARY axis (row or column)
      alignItems : "center" sets the items to the center to the SECONDARY axis , which is not chosen as primary, determines items within each line
        "baseline" sets the baseline of all items to the same, in other words, think of a diagram with staples = same ground starting point
        "center" means center
        "flex-end" appears at the end of the SECONDARY axis
        "flex-wrap" determines the alignment of items along the SECONDARY axis within EACH line
      alignContent : aligns ALL content/items on the SECONDARY axis (only works if we have WRAPPING)
        "flexBasis" : sets the basis (row or column) size, so if row, its width, if it is column it is height
        "flexGrow" :  is basically exactly the same as settings the flex : 1 property
        "flexShrink" is basically the opposite of flex grow, setting flex: -1 is exactly the same as setting flexShrink
        "position : relative" : in react native components by default has all of its components position set to relative
        "relative" : respoects the "flex" property
        "absolute" : sets its position absolute relative to the parent element, and the other elemts will reposition themselves as if this absolute element does not exist

        */
       
       return (
         <>
           {
             show 
               ?  <WelcomeScreen changeView={SwitchView} />
               :  <ViewImageScreen />
           }
         </>

  );
}