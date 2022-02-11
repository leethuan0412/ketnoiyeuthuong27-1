import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
// import styles from "./stylesFollow"
import Component from '../follow/component';
import data  from './dataunfollow';
import FirstRoute from './tabfollow';
import SecondRoute from './tabunfollow';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
    <SafeAreaView>
      <View style={{ marginTop: 15, }}>
        {
          data.map(item => (
            <Component key={item.id} name={item.name} image={item.image} isFollow={item.isFollow} />
          ))
        }
      </View>
    </SafeAreaView>
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

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '5 người theo dõi' ,},
    { key: 'second', title: 'Theo dõi 5 người' },
  ]);

  return (
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width ,}}
      renderTabBar={renderTabBar}
      //style={{marginTop:80,}}      
    />
  );
}