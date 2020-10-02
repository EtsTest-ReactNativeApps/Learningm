import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <View style={styles.drawerHeader}>
                    <Image
                        style={{width:"100%",height:200}}
                        source={require("../assets/logo2.png")}
                    />
            </View>
            <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
                    <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                            )}
                            labelStyle={styles.labelStyle}
                            label="Home"
                        />
                    <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="account"
                                color={color}
                                size={size}
                            />
                            )}
                            labelStyle={styles.labelStyle}
                            label="Profile"
                        />
                        <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="settings"
                                color={color}
                                size={size}
                            />
                            )}
                            labelStyle={styles.labelStyle}
                            label="Settings"
                        />
                        <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="message"
                                color={color}
                                size={size}
                            />
                            )}
                            labelStyle={styles.labelStyle}
                            label="Feedback"
                        />
                
            </DrawerContentScrollView>
            <View style={styles.drawerFooter}>
                <DrawerItem
                    icon={({color,size}) =>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                    />
                    )}
                    labelStyle={styles.labelStyle}
                    label="Logout"
                />
            </View>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerHeader:{
        
        marginTop:50,
        marginLeft:30,
        width:"75%"
    },
    drawerContent:{
        marginLeft:20
    },
    labelStyle:{
        fontSize:20,
        fontWeight:"bold"
    },
    drawerFooter:{
        bottom:40,
        marginLeft:20
    }
})