import React from 'react';
import {View,StyleSheet,Text,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import HeaderWithGoBack from '../Components/HeaderWithGoBack';
import { Card, Icon } from 'react-native-elements';

function ProfilePage(props){
    return(
        <React.Fragment>
            <HeaderWithGoBack
                {...props}
                title="Profile"
            />
            <View style={styles.profileView}>
                <View style={styles.profileDetails}>
                        <Avatar
                            source={require('../assets/profileavatar.png')}
                            size={180}
                            avatarStyle={styles.avatarStyle}
                        />
                    <View>
                        <Text style={styles.textStyles}>Bharadwaj K R</Text>
                        <Text style={styles.textStyles}>yajamankr@gmail.com</Text>
                    </View> 
                </View>
                <View style={styles.progressBar}>
                    <Icon
                        name="verified-user"
                        size={50}
                        color="orange"
                    />
                    <View style={{ width: "70%", justifyContent: "flex-end" }}>
                        <Text style={{fontSize:15,fontWeight:"bold",marginLeft:10}}>+600 points to next level </Text>
                        <ProgressBarAndroid
                                styleAttr="Horizontal" 
                                indeterminate={false} 
                                progress={0.7} 
                                color="yellow" 
                                style={{width:"100%"}}
                            />
                    </View>
                </View>
                <View style={styles.progressView}>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#6f548f"}}>Languages:</Text>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#54718f",marginLeft:20}}>Kannada</Text>
                        </View>   
                    </Card>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#6f548f"}}>Words Completed:</Text>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#54718f",marginLeft:20}}>10</Text>
                        </View> 
                        
                    </Card>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#6f548f"}}>Words Completed:</Text>
                            <Text style={{ fontSize: 20, fontWeight:"bold",color:"#54718f",marginLeft:20}}>10</Text>
                        </View> 
                        
                    </Card>
                    
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> console.log("logout")}
                    >
                            <Icon
                            name='exit-to-app'
                            color="#6f548f"
                            />
                        <Text style={{ fontSize: 20, marginLeft: 20,fontWeight:"bold", color:'#54718f'}}>Logout</Text>
                        </TouchableOpacity>
                    
                </View>
            </View>
                    
                    
        </React.Fragment>
    )
}

export default ProfilePage;

const styles = StyleSheet.create({
    profileView:{
        flex: 1,
        backgroundColor: "#33898f",
    },
    textStyles: {
        margin: 15,
        fontSize: 20,
        fontWeight: "bold",
        color:"white"
    },
    profileDetails:{
        width: "100%",
        flexDirection: "row",
        height: "30%",
        alignItems: "center",
        justifyContent:"space-around",
        
    },
    progressBar: {
        flexDirection: "row",
        width:"100%",
        justifyContent:"center",
    },
    progressView: {
        top: 50,
        paddingTop:20,
        width: "100%",
        height: "100%",
        borderTopEndRadius: 60,
        borderTopStartRadius:60,
        backgroundColor: "white",
        alignItems:"center"
    },
    cardContainer: {
        width: "80%",
        height: 50,
        borderRadius: 10,
    
        shadowColor: "#000",
        margin:20,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 8
        
    },
    buttonStyle: {
        marginTop:40,
        flexDirection: "row",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: 40,
        borderRadius: 10,
        shadowColor: "#000",
        margin:20,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 15
    }
    
})