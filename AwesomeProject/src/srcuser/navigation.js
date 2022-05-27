import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import display from '../srcuser/display';
import settingacc from '../srcuser/settingacc';
import information from '../srcuser/information';
import phone from '../srcuser/phone';
import otpinput from '../srcuser/otpinput';
import notifications from '../srcuser/notifications';
import email from '../srcuser/email';
import sendemail from '../srcuser/sendemail';
import vote from '../follow/vote';
import login from '../srcloginn/login';
import sigin from '../srcloginn/sigin';
import password from '../srcloginn/password';
import forgetpassword from '../srcloginn/forgetpassword';
import forget from '../srcloginn/forget';
import TabViewExample from '../follow/viewfollow';
import follow from '../follow/follow';
const Stack = createStackNavigator();
function Mystack2() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="sigin" component={sigin} />
      <Stack.Screen name="password" component={password} />
      <Stack.Screen name="forgetpassword" component={forgetpassword} />
      <Stack.Screen name="forget" component={forget} />
      <Stack.Screen name="Mystack2" component={Mystack} />
      <Stack.Screen name="MyTab" component={MyTab} />
    </Stack.Navigator>
  );
}

function Mystack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="display" component={display} />
      <Stack.Screen name="information" component={information} />
      <Stack.Screen name="phone" component={phone} />
      <Stack.Screen name="otpinput" component={otpinput} />
      <Stack.Screen name="settingacc" component={settingacc} />
      <Stack.Screen name="notifications" component={notifications} />
      <Stack.Screen name="email" component={email} />
      <Stack.Screen name="sendemail" component={sendemail} />
      <Stack.Screen name="vote" component={vote} />
      <Stack.Screen name="Mystack2" component={Mystack2} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: 'black'}}>
      <Tab.Screen
        name="Trang chủ"
        component={Mystack}
        options={{
          //tabBarStyle: { display: "none" },
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="follow"
        component={follow}
        options={{
          // tabBarStyle: { display: "none" },
          tabBarLabel: 'Follow',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="email"
        component={email}
        options={{
          // tabBarStyle: {display: 'none'},
          tabBarLabel: 'Cộng đồng',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="hand-heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="sendemail"
        component={sendemail}
        options={{
          // tabBarStyle: {display: 'none'},
          tabBarLabel: 'Quản lý ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="settingacc"
        component={settingacc}
        options={{
          //tabBarStyle: {display: 'none'},
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Init = () => {
  //screenOptions={{ headerShown: false }}
  return (
    <NavigationContainer>
      <Mystack2> </Mystack2>
    </NavigationContainer>
  );
};
export default Init;
