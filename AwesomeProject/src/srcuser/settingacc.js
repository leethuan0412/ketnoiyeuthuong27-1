import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationActions } from 'react-navigation';
import styles from '../../stylelogin/styleacc';
import Bigger from '../../contanst/bigger.svg';
import People from '../../contanst/people.svg';
import Bell from '../../contanst/bell.svg';

const settingacc = (props) => {
    // const navigation = useNavigation();
    const { navigation } = props;
    return (
        <SafeAreaView >
            <View style={styles.setting}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop:21, justifyContent:'space-between'}} onPress={()=>{navigation.navigate('information')}}>
                    <People resizeMode="contain" style={styles.image2} />
                    <Text style={{ fontSize: 14, marginLeft: 10,marginTop:3 }}>Thông tin cá nhân</Text>
                    <Bigger height={24} width={24}/>
                </TouchableOpacity>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity style={{ flexDirection: 'row',marginTop:21,justifyContent:'space-between' }} onPress={()=>{navigation.navigate('notifications')}}>
                    <Bell  resizeMode="contain" style={styles.image2} />
                    <Text style={{ fontSize: 14, marginLeft: 10,marginTop:3}}>Cài đặt thông báo</Text>
                    <Bigger height={24} width={24}/>
                </TouchableOpacity>
            </View>
            <View style={styles.setting}>
                <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
                    <Text style={{ fontSize: 14, color: '#FF0000',marginTop:21  }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
// const styles = StyleSheet.create({
//     image2: {
//         height: 30,
//         width: 30,
//        //alignSelf:'center',
//        // justifyContent:'center',
//     },
// });

export default settingacc;