import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
function ProfilePage(){
    return(
        <View style={styles.profileView}>
            <View style={styles.profilePicView}>
                <LinearGradient
                colors={['#33898f', 'transparent']}
                style={{
                top: 0,
                height:"100%",
                justifyContent:"center",
                alignItems:"center"
                }}
                >
                    <Image
                        source={require("../assets/profileavatar.png")}
                        style={{
                            width:200,
                            height:200
                        }}
                    />
                </LinearGradient>
            </View>
        </View>
    )
}

export default ProfilePage;

const styles = StyleSheet.create({
    profileView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    profilePicView:{
        position:"absolute",
        top:0,
        width:"100%",
        height:"40%"
    },
    profileDetails:{
        width:"100%"
    }
})