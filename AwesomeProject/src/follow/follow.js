import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
// import styles from "./stylesFollow"
import Component from '../follow/component';
import data  from './dataunfollow';
import FirstRoute from './tabfollow';
import SecondRoute from './tabunfollow';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
// const FirstRoute = () => (
//   <SafeAreaView>
  
//   </SafeAreaView>
// );

// const SecondRoute = () => {
  // const data = [
  //   {
  //     id: 0,
  //     name: 'Lê Đức Thuận',
  //     image: "https://i.pinimg.com/564x/bb/8b/97/bb8b976467f63fc083bcc18f2c47b760.jpg",
  //     isFollow: true,
  //   },
  //   {
  //     id: 1,
  //     name: 'Thuận Đức Lê',
  //     image: "https://i.pinimg.com/236x/1e/7c/05/1e7c05ddc29574b3d3627c055ecc0934.jpg",
  //     isFollow: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'Đức Thuận Lê',
  //     image: "https://i.pinimg.com/236x/4f/4e/22/4f4e2213fadd0f38dc79d215bc9b2641.jpg",
  //     isFollow: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'Thuận Lê Đức',
  //     image: "https://i.pinimg.com/236x/c2/6e/d2/c26ed213a2b99e84729863a4b9359c17.jpg",
  //     isFollow: true,
  //   },
  //   {
  //     id: 4,
  //     name: 'Đức Lê Thuận',
  //     image: "https://i.pinimg.com/236x/bd/af/bf/bdafbf81a88e8872b457dd2779840931.jpg",
  //     isFollow: true,
  //   },
  // ]
  // return (
    <SafeAreaView>
      <View style={{ marginTop: 15, }}>
        {
          data.map(item => (
            <Component key={item.id} name={item.name} image={item.image} isFollow={item.isFollow} />
          ))
        }
      </View>
    </SafeAreaView>
  // );

// };

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