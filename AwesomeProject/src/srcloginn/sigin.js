import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import styles from '../../stylelogin/styleLogin';
import Facebook from '../../contanst/facebook.svg';
import Logo from '../../contanst/logo.svg';
const sigin = (props) => {
  const { navigation } = props;
  const [text1, onChangeText1] = React.useState(null);
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
     <Logo  resizeMode="center" style={styles.image} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Họ tên"
      />
      <TextInput
        style={styles.input1}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeNumber}
          value={number}
          maxLength={5}
          secureTextEntry={isSecureText}
          placeholder="Mật khẩu"
        />


      </View>
      <TouchableOpacity  style={styles.login}>
        <Text style={{color:'white'}}>Đăng kí</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 19 }}>
        <Text style={{ fontSize: 14, marginLeft: 31, }}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity  onPress={() => { navigation.navigate('login') }}>
          <Text style={styles.dangki}>Đăng nhập</Text>
        </TouchableOpacity>

      </View >
      <Text style={styles.Text1}>-Hoặc đăng nhập với-</Text>
      <View style={{ flexDirection: 'row', marginTop: 18, alignSelf: 'center' }}>
        <TouchableOpacity>
          <Image
            style={styles.google1}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Facebook   height= {36}  width= {36} marginLeft={15}  />
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 50,
//     margin: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     borderColor:"#C4C4C4",
//   },
//   dangki:{
//     color:'#60B939',
//     fontSize: 15,
//     //fontWeight:'bold',
//   },
//   Text1:{
//     fontSize: 15,
//     marginTop:10,
//     alignSelf:'center',
//     //fontWeight:'bold',
//   },
//   image: {
//     height: 49,
//         width: 166,
//         alignSelf: 'center',
//     marginTop:30,
//   },
//   google1:{
//     borderRadius:16,
//     height: 36,
//     width:36,
//   //  alignSelf:'center',

//   },
//   facebook1:{
//     borderRadius:16,
//     height: 36,
//     width:36,
//   //  alignSelf:'center',
//   marginLeft:15,
//   },
//   login:{
//     backgroundColor: '#60B939',
//         color: 'white',
//         padding: 16,
//         borderRadius: 10,
//         paddingHorizontal: 128,
//         alignSelf: 'center',
//         marginTop: 15,
//         fontSize: 14,
//   },
//   baseText:{
//     //fontWeight:'bold',
//     alignSelf:'flex-end',
//     marginRight:10,
//     fontSize: 14,
//   },
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default sigin;