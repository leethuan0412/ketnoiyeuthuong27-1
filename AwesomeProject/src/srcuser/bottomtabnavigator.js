import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons/FontAwesome';
import display from '../srcuser/display';
import settingacc from '../srcuser/settingacc';
import information from '../srcuser/information';
import phone from '../srcuser/phone';
import otpinput from '../srcuser/otpinput';
import notifications from '../srcuser/notifications';
import email from '../srcuser/email';
import sendemail from '../srcuser/sendemail';
import Home from '../../contanst/home.svg';
import Message from '../../contanst/message.svg';
import Popular from '../../contanst/heart.svg';
import User from '../../contanst/user.svg';
import List from '../../contanst/list.svg';
import login from '../srcloginn/login';
import sigin from '../srcloginn/sigin';

//import Mystack from '../srcuser/navigation';

const navi = () => {
  const Tab = createBottomTabNavigator();
  //const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'green'}}>
        <Tab.Screen
          name="display"
          component={display}
          options={{
            //tabBarStyle: { display: "none" },
            tabBarLabel: 'Trang chủ',
            tabBarIcon: () => <Home size={24} />,
            //     tabBarIcon: () => (
            //         <MaterialCommunityIcons name="account" color={'red'} size={20} />
            //       ),
          }}
        />
        <Tab.Screen
          name="login"
          component={login}
          options={{
            //tabBarStyle: { display: "none" },
            tabBarLabel: 'Tin nhắn',
            tabBarIcon: () => <Message size={20} />,
          }}
        />

        <Tab.Screen
          name="sigin"
          component={sigin}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarLabel: 'Cộng đồng',
            tabBarIcon: () => <Popular size={20} />,
          }}
        />
        <Tab.Screen
          name="Quản lí"
          component={phone}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarLabel: 'Cộng đồng',
            tabBarIcon: () => <List size={20} />,
          }}
        />
        <Tab.Screen
          name="settingacc"
          component={settingacc}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarLabel: 'Tài khoản',
            tabBarIcon: () => <User size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default navi;
