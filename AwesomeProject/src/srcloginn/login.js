import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationActions} from 'react-navigation';
import Svg, {image, SvgUri} from 'react-native-svg';
import styles from '../../stylelogin/styleLogin';
import Eye from '../../contanst/eye.svg';
import Eyehint from '../../contanst/eyehint.svg';
import Facebook from '../../contanst/facebook.svg';
import Logo from '../../contanst/logo.svg';
import Google from '../../contanst/gg.svg';
const login = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = {
    uri: 'https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };
  const [isSecureText, setSecureText] = React.useState(true);

  return (
    <SafeAreaView>
      <Logo resizeMode="center" style={styles.image} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeNumber}
          value={number}
          maxLength={10}
          secureTextEntry={isSecureText}
          placeholder="Mật khẩu"
          //keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.imageyes}
          onPress={() => {
            setSecureText(!isSecureText);
          }}>
          {!isSecureText ? (
            <Eye width={24} height={24} />
          ) : (
            <Eyehint width={24} height={24} />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{justifyContent: 'flex-end'}}
        onPress={() => {
          navigation.navigate('password');
        }}>
        <Text style={styles.baseText}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          navigation.navigate('MyTab');
        }}>
        <Text style={{color: 'white'}}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 18}}>
        <Text style={{fontSize: 14, marginLeft: 31}}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('sigin');
          }}>
          <Text style={styles.dangki}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Text}>-Hoặc đăng nhập với-</Text>
      <View style={{flexDirection: 'row', marginTop: 18, alignSelf: 'center'}}>
        <TouchableOpacity>
          <Google style={styles.google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Facebook height={36} width={36} marginLeft={15} bottom={'16.41%'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default login;
