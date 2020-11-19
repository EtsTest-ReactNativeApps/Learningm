import React from 'react';
import {View,StyleSheet,Text,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import HeaderWithGoBack from '../Components/HeaderWithGoBack';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {logOutRequest,resetLevelReq,resetLevelContent,resetUserProgress} from '../actions/index'

function ProfilePage(props) {
    
    const { user, level, levelContent,userProg } = props
    // console.log(level)

    let totalMaxScore =0

    level.CONTENT.forEach((l,i) => {
        totalMaxScore +=l.levelMaxScore
    });

    // console.log(totalMaxScore)
    const handleLogout = () => {
        props.resetUser(user)
        props.resetLevel(level)
        props.resetLevelContent(levelContent)
        props.resetUserProg(userProg)
    }
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
                        <Text style={styles.textStyles}>{user.payload.CONTENT.firstName}</Text>
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
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{userProg.CONTENT.userScore} points out of {totalMaxScore} </Text>
                        <ProgressBarAndroid
                                styleAttr="Horizontal" 
                                indeterminate={false} 
                                progress={userProg.CONTENT.userScore/totalMaxScore} 
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
                            <Text style={styles.cardText}>Languages:</Text>
                            <Text style={{ ...styles.cardText, color: "#54718f", marginLeft: 20 }}>{user.payload.CONTENT.languageList[0].language}</Text>
                        </View>   
                    </Card>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={styles.cardText}>Words Completed:</Text>
                            <Text style={{ ...styles.cardText, color: "#54718f", marginLeft: 20 }}>{userProg.CONTENT.totalCompletedWords}</Text>
                        </View> 
                        
                    </Card>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={styles.cardText}>Status:</Text>
                            <Text style={{ ...styles.cardText, color: "#54718f", marginLeft: 20 }}>{userProg.CONTENT.langStatus}</Text>
                        </View> 
                        
                    </Card>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <Text style={styles.cardText}>Score:</Text>
                            <Text style={{ ...styles.cardText, color: "#54718f", marginLeft: 20 }}>{userProg.CONTENT.userScore}</Text>
                        </View> 
                        
                    </Card>
                    
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={handleLogout}
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

const mapStateToProps =(state) =>{
    return {
        user: state.user,
        level: state.levelsData,
        levelContent: state.levelContent,
        userProg:state.userProgress
    }
}
const mapDispatchToProps =(dispatch) =>({
    resetUser: (data) => dispatch(logOutRequest(data)),
    resetLevel: (data) => dispatch(resetLevelReq(data)),
    resetLevelContent: (data) => dispatch(resetLevelContent(data)),
    resetUserProg: (data) => dispatch(resetUserProgress(data)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);

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
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6f548f",
        textTransform:"capitalize"
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