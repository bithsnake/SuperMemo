
import { ImageBackground,Dimensions, StatusBar as TOP_BAR, StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import { styles } from '../Styles';
import React, { useEffect, useState } from 'react';

interface IPage {
  url: string;
  pages: string[];
};
class Page implements IPage {
  constructor() {
    this.url = "";
    this.pages = [];
    
  }
  url: string;
  pages: string[];
  addUrl(url: string) {
    this.pages.push(url);
  }
}
const page = new Page();
page.addUrl("start");
page.addUrl("home");
let pageSelector: string | undefined = "start"
let _page: JSX.Element;

export default function App() {
  const orientation = useDeviceOrientation();
  const { landscape } = useDeviceOrientation();
  const dimensions = useDimensions();
  // on load
  useEffect(() => {
    console.log("loaded page");
  }, []);
        
  return (
    <>

    </>
  );
}