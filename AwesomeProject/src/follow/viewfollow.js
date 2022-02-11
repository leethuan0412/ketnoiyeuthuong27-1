import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Sub from '../../contanst/sub.svg';

import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import Component from "./component";
// import FirstRoute from './tabfollow';
// import SecondRoute from './tabunfollow';
// import data from './dataunfollow';
const FirstRoute = () => (
    <SafeAreaView>
        {/* <View style={{ marginTop: 15, }}>
        </View> */}
    </SafeAreaView>
);
const SecondRoute = () => {

    return (
        <SafeAreaView>
            <View style={{ marginTop: 45, }}>
                <TouchableOpacity>
                    <Sub style={{ height: 220, width: 329, alignSelf: 'center', }} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 20, }}>Bạn chưa theo dõi ai</Text>
            </View>
        </SafeAreaView>
    );

};

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '5 người theo dõi' ,},
    { key: 'second', title: 'Theo dõi 5 người' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#60B939' }}
      style={{ backgroundColor: '#FFFFFF',}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color:'black', margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width ,}}
      renderTabBar={renderTabBar}
      style={{marginTop:80,}}      
    />
  );
}

