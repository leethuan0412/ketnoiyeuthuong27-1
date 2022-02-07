import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import styles from "../../stylelogin/stylefollow";
import Component from "./component";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
import data from './dataunfollow';
const SecondRoute = () => {
    return (
      <SafeAreaView>
        <View style={{}}>
          {
            data.map(item => (
              <Component id={item.id} name={item.name} image={item.image} isFollow={item.isFollow} fromList={true}/>
            ))
          }
        </View>
      </SafeAreaView>
    );
  
  };

  export default SecondRoute;