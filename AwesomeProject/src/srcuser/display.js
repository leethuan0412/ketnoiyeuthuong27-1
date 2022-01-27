import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationActions } from 'react-navigation';
import styles from '../../stylelogin/styleacc';
import Email from '../../contanst/email.svg';
import Phone from '../../contanst/phone.svg';
import Fb from '../../contanst/fb.svg';
import Account from '../../contanst/account.svg';
import Setting from '../../contanst/setting.svg';
import Star from '../../contanst/star.svg';
import Bigger from '../../contanst/bigger.svg';
import Help from '../../contanst/help.svg';
import Home from '../../contanst/homee.svg';
import Message from '../../contanst/messagee.svg';
import User from '../../contanst/userr.svg';
import Popular from '../../contanst/popular.svg';
import Manage from '../../contanst/manage.svg';

        const image = { uri: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-1/p240x240/267709207_937709370181259_2338391875242033509_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8r5T4wswWvwAX9jQpm5&_nc_ht=scontent.fhan4-3.fna&oh=00_AT85lu6dLcEJCjY8rZhv61kavGn90yt_17xDJjexLJpOZw&oe=61F2B2D7" };
        const image1 = { uri: "https://massageishealthy.com/wp-content/uploads/2018/12/avartar-massage-healthy-cu.png" };
        const image7 = { uri: "https://cdn.pixabay.com/photo/2017/06/08/20/18/computer-icon-2384752_960_720.png" };
const image9 = { uri: "https://cdn0.iconfinder.com/data/icons/zoldo-miscellaneous-002/64/list_menu_options_1-512.png" };
const display = () => {
    const navigation = useNavigation();
    //const { navigation } = props;
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <View style={{ flexDirection: 'row', }}>

                <View stlye={{ flexDirection: 'row' }}>
                    <Image source={image} style={styles.image} />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 5, bottom: 5 }}>
                        <Image source={image1} style={styles.image1} />
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={styles.bigText}>Lê Đức Thuận</Text>
                    <Text style={styles.textone}>Sóc Sơn, Hà Nội</Text>
                    <TouchableOpacity>
                        <Text style={styles.texttwo}>Xem tài khoản như khách thăm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ridesFriends}>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>132</Text>
                    <Text style={styles.Text}>Đã cho</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>483</Text>
                    <Text style={styles.Text}>Theo dõi</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>97</Text>
                    <Text style={styles.Text}>Đang theo dõi</Text>
                </View>
            </View>
            <View style={styles.square}>
                <View >

                    <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 20, }}>Đã xác minh</Text>


                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20, }}>
                    <Email style={styles.baseimage} />
                    <Phone style={styles.baseimage} />
                    <Fb style={styles.baseimage} />
                    <Account style={styles.baseimage} />
                </View>
            </View>
            <View>
                <View style={{ marginTop: 20, }}>
                    <View style={styles.setting} >
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 18,justifyContent:'space-between' }} onPress={() => { navigation.navigate('settingacc') }}>
                            <Setting height={24} width={24}/>
                            <Text style={styles.baseText}>Cài dặt tài khoản</Text>
                            <View style={{ alignSelf: "flex-end" }}>
                            <Bigger height={24} width={24}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 21,justifyContent:'space-between' }}>
                        <Star height={24} width={24}/>
                            <Text style={styles.baseText}>Đánh giá ứng dụng</Text>
                            <Bigger height={24} width={24}/>
                        </TouchableOpacity>
 
                    </View>
                    <View style={styles.setting}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 21,justifyContent:'space-between' }}>
                        <Help height={24} width={24}/>
                            {/* <Vector width={24} height={24} /> */}
                            <Text style={styles.baseText}>Trợ giúp</Text>
                            <Bigger height={24} width={24}/>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, alignSelf: "center",justifyContent:'center'}}>
                <View >
                    <TouchableOpacity>
                        <Home height={56} width={72} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <TouchableOpacity>
                    <Popular height={56} width={72} />
                        {/* <Text>Cộng đồng</Text> */}
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <TouchableOpacity>
                    <Message height={56} width={72} />
                        
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, }} >
                    <TouchableOpacity>
                    <Manage height={56} width={72} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <TouchableOpacity>
                    <User height={56} width={72} />
                        
                    </TouchableOpacity>
                </View>



            </View>
        </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     bigText: { color: 'black', fontSize: 18, marginTop: 24, marginLeft: 13 },
//     textone: { color: '#666666', fontSize: 14, marginTop: 8, marginLeft: 17 },
//     texttwo: { color: '#60B939', fontSize: 14, marginTop: 8, marginLeft: 17 },
//     setting: { width: 360, height: 56, borderBottomWidth: 1, alignSelf: 'center', borderBottomColor: "#C4C4C4", },
//     iconn:{ height: 30, width: 30, alignSelf: "center", },
//     square: {
//         marginTop: 20,
//         height: 107,
//         width: 328,
//         backgroundColor: '#FFFFFF',
//         borderRadius: 16,
//         alignSelf: "center",
//         marginLeft: 16,
//         marginRight: 16,
//     },
//     ridesFriends: {
//         //paddingTop: 70,
//         marginTop: 26,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         width: '100%',
//         //marginBottom: 20,
//     },
//     Text: {
//         fontSize: 14,
//         alignSelf: 'center',
//         color: '#666666',
//     },
//     baseText: {
//         fontSize: 14,
//         //alignSelf: 'center',
//         marginLeft: 12.5,
//         //marginTop:21,
//     },
//     numbers: {
//         fontSize: 30,
//         color: 'black',
//         //fontWeight: 'bold',
//         alignSelf: 'center',
//     },
//     verticleLine: {
//         height: 30,
//         width: 1,
//         backgroundColor: '#C4C4C4',
//         alignSelf: "center",
//     },
//     image: {
//         height: 80,
//         width: 80,
//         //alignSelf: 'center',
//         marginTop: 20,
//         borderRadius: 40,
//         marginLeft: 16,
//     },
//     baseimage: {
//         height: 30,
//         width: 30,
//         alignSelf: 'center',
//         marginTop: 20,
//         borderRadius: 20,
//         marginVertical: 10,
//         marginLeft: 30,
//         marginRight: 30,

//     },
//     image1: {
//         height: 21,
//         width: 21,
//         // alignSelf: 'center',
//         // marginTop: 20,
//         // borderRadius: 20,

//     }
// });

export default display;