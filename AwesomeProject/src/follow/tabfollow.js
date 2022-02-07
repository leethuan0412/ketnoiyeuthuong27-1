import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import styles from "../../stylelogin/stylefollow";
import Component from "./component";
import dataList from './datafollow';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
const FirstRoute = () => {
    return (
    <SafeAreaView>
        <View style={{ marginTop: 15, }}>
        {
            dataList.map(item => (
            <Component key={item.id} name={item.name} image={item.image} isFollow={item.isFollow} fromList={false}/>
            ))
        }
        </View>
    </SafeAreaView>
    )
}
  

export default FirstRoute;