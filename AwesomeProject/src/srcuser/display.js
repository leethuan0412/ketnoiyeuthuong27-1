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
import Avatar from '../../contanst/avt.svg';
     const image1 = { uri: "https://massageishealthy.com/wp-content/uploads/2018/12/avartar-massage-healthy-cu.png" };
const display = () => {
    const navigation = useNavigation();
    
    //const { navigation } = props;
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <View style={{ flexDirection: 'row', }}>

                <View stlye={{ flexDirection: 'row' }}>
                    <Avatar style={styles.image} />
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
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 21,justifyContent:'space-between' }} onPress={() => { navigation.navigate('vote') }}>
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
            {/* <View > 
            <View style={{ flexDirection: 'row', alignSelf: "center",justifyContent:'center'}}>
                <View >
                    <TouchableOpacity>
                        <Home height={56} width={72} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <TouchableOpacity>
                    <Popular height={56} width={72} />
                        {/* <Text>Cộng đồng</Text> */}
                    {/* </TouchableOpacity>
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
            </View> */} 
        </SafeAreaView>
    );
};
export default display;