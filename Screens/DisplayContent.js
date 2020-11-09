import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ActivityIndicator,Dimensions} from 'react-native';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import {Icon} from 'react-native-elements';
import CustomHeader from '../Components/CustomHeader';
import {connect} from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import {updateUserProgess} from '../actions/index'
import OverLayModal from '../Components/OverLayModal';
import {wordIncrement,wordProgressScore} from '../environment'
function DisplayContents(props) {
    const { userProgData ,navigation} = props
    const levelContent = props.levelContent.CONTENT;
    const [index,setIndex] = React.useState(props.route.params.index);
    const [content, setContent] = React.useState(levelContent[index]);
    const [loading, setLoading] = React.useState(true);
    const [isVisible, setVisible] = React.useState(false);
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: true
    });
    const sound = new Audio.Sound();
    const status = {
        shouldPlay:false
    }
    sound.loadAsync({ uri: content.audioPath },status,false)
    
    const handleVisible = () => {
        setVisible(!isVisible)
    }

    const handleNext = (i) => {
        setLoading(true);
        setIndex(i);
        if (index + 1 <= userProgData.CONTENT.completedWords) {
        //    console.log("1st",index,userProgData.CONTENT.completedWords)
            props.updateProgress({
                ...userProgData
            })
        } 
        if (index + 1 > userProgData.CONTENT.completedWords) {
            // console.log("2nd ",index,userProgData.CONTENT.completedWords)
            props.updateProgress({
                ...userProgData.CONTENT,
                completedWords: userProgData.CONTENT.completedWords + wordIncrement,
                totalCompletedWords: userProgData.CONTENT.totalCompletedWords + wordIncrement,
                userScore:userProgData.CONTENT.userScore + wordProgressScore
            })
        }
        
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    
    const playSound = () => {
        sound.playAsync().then(() => {
            sound.replayAsync();
        })
    }
    React.useEffect(() => {
        setIndex(props.route.params.index)
    },[props.route.params.index])
    
    React.useEffect(()=>{
        if (index <levelContent.length-1) {
            setContent(levelContent[index])
        } 
    },[index])
    
    return(
        <React.Fragment>
            <CustomHeader {...props} title="Introduction" />
            <LinearGradient
                colors={['#33898f', 'transparent']}
                style={{
                width:"100%",
                height:"100%",
                }}
            >
                {loading ?
                    <ActivityIndicator
                        size="large"
                        color="#4287f5"
                        style={styles.activityStyle}
                    />
                    :(<View style={styles.mainView}>
                        <View style={styles.videoView}>    
                            <VideoPlayer
                                videoProps={{
                                    shouldPlay: true,
                                    resizeMode: "cover",
                                    source: {
                                        uri: content.videoPath,
                                    },
                                    
                                }}
                                width={Dimensions.get('window').width}
                                height={Dimensions.get('window').height*0.4}
                            />
                                <View style={{backgroundColor:"#c5e5e8",padding:10}}>
                                    <Text
                                    style={styles.textStyle}
                                    >{content.word}</Text>
                                </View>
                        </View>
                        <View style={styles.contentView}>
                            <View>
                                    <TouchableOpacity onPress={playSound}>
                                        <Icon  
                                            name="volume-up"
                                            type="font-awesome"
                                            size={45}
                                            color="orange"
                                        />
                                    </TouchableOpacity>
                            </View>
                            <View style={styles.transcriptView}>
                                <View>
                                    <Text style={{...styles.textStyle,fontSize:22}}>English</Text>
                                    <Text style={{ ...styles.textStyle, fontWeight: "normal", }}>{content.transcript}</Text>
                                </View>
                                <View>
                                    <Text style={{...styles.textStyle,fontSize:20,}}>Literal Translation</Text>
                                    <Text style={{ ...styles.textStyle, fontWeight: "normal" }}>{content.word}</Text>
                                </View>
                            </View>
                            <View style={styles.buttonView}>
                            {index < levelContent.length-1 ?
                                (
                                    <TouchableOpacity style={styles.button}
                                    onPress={() => handleNext(index+1)}
                                    >
                                        <Text style={{...styles.textStyle,color:"white"}}>Ok Got it !</Text>
                                    </TouchableOpacity>
                                ) :
                                (
                                    <TouchableOpacity style={styles.button}
                                    onPress={handleVisible}
                                    >
                                        <Text style={{...styles.textStyle,color:"white"}}>Ok Got it !</Text>
                                    </TouchableOpacity>
                                )
                        }
                        </View>
                        </View>
                    </View>)
                }
                {
                    isVisible ?
                        <OverLayModal
                            isVisible={isVisible}
                            setVisible={handleVisible}
                            navigation={navigation}
                        /> :
                        null
                }
            </LinearGradient>
        </React.Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        levelContent: state.levelContent,
        userProgData:state.userProgress
    }
}

const mapDispatchToProps =(dispatch) =>({
    updateProgress:(data) =>dispatch(updateUserProgess(data)),
    
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayContents);

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        width:"100%",
        alignItems: "center",
        backgroundColor:"white"
    },
    videoView: {
        width:"100%",
        height:'40%',
        borderRadius:20
    },
    textStyle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#6f6285"   
    },
    contentView: {
        height: "50%",
        width: "100%",
        alignItems:"center",
        justifyContent:'space-evenly'
    },
    transcriptView: {
        justifyContent: "space-between",
        height:"30%"
    },
    buttonView: {
        width:"90%",
    },
    button:{
        backgroundColor:"orange",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        height:45
    },
    controlBar:{
        position:"absolute",
        top:"45%",
        left:"45%"
    },
    activityStyle: {
        position: "absolute",
        top: "40%",
        left: "45%",
        zIndex:1
      }
})