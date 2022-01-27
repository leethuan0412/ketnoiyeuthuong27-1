import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import styles from "../../stylelogin/stylefollow";

const Component = ({name, image, isFollow}) => {
    const [textFollowed, setTextFollowed] = useState('');
    const [IsFollowStatus, setIsFollowStatus] = useState(isFollow);
    useEffect(() => {
        if(isFollow === true){
            setTextFollowed('Theo dõi');
            setIsFollowStatus(isFollow);
        }
        else{
            setTextFollowed('Bỏ Theo dõi');
            setIsFollowStatus(isFollow);

        }
    }, []);
    const changeStatus = () => {
        if(IsFollowStatus === true){
            setTextFollowed('Bỏ theo dõi');
            setIsFollowStatus(false);
        }
        else {
            setTextFollowed('Theo dõi');
            setIsFollowStatus(true);
        }
    }
    return (
        <View style={styles.viewA}>
            <Image source={{ uri: image}} style={styles.Image} />
            <Text style={{  marginTop: 27, fontSize: 14, }}>{name}</Text>
           
            <TouchableOpacity style={IsFollowStatus ? styles.touchA : styles.touchA1} onPress={changeStatus}>
                    <Text style={styles.Text}>{textFollowed}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Component;