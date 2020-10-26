import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Video,Audio } from 'expo-av';
import {Icon} from 'react-native-elements';
import CustomHeader from '../Components/CustomHeader';
import {connect} from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient'
function DisplayContents(props) {
    const [shouldPlay,setShouldPlay] = React.useState(true);
    const [playing,setPlaying] = React.useState(true)
    const { navigation } = props
    const levelContent = props.levelContent.CONTENT;
    const [index,setIndex] = React.useState(props.route.params.index);
    const [content, setContent] = React.useState(levelContent[index]);
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 5000);
    // console.log(props.route.params.index,props.levelContent)

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
    
    const handlePlayAndResume = () => {
        // console.log("handle play")
        setShouldPlay(!shouldPlay);
    }
    const playBackStatus = (playback) =>{
        if(playback.isPlaying){
            setPlaying(true);
        }else{
            setPlaying(false)
        }
    }
    
    const handleNext = (index) => {
        setLoading(true);
        setIndex(index);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
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
        if(levelContent[index]){
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
                            <Video
                                source={{ uri: content.videoPath}}
                                rate={1.0}
                                volume={1.0}
                                resizeMode="cover"
                                shouldPlay={shouldPlay}
                                style={{ width:"100%", height:"90%" }}
                                onPlaybackStatusUpdate={playBackStatus}
                                />
                                <View style={styles.controlBar}>
                                    <Icon
                                        name={playing?null:"repeat"}
                                        type="font-awesome"
                                        size={45}
                                        color="#a5ada7"
                                        onPress={handlePlayAndResume}
                                    />
                                </View>
                                <View style={{backgroundColor:"#c5e5e8"}}>
                                    <Text
                                        style={{ textAlign: "center", margin: 10, fontSize: 20, fontWeight: "bold",color:"#6f6285" }}
                                    >{content.word}</Text>
                                </View>
                        </View>
                        <View style={styles.audioView}>
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
                            <Text style={{fontSize:20,fontWeight:"bold",margin:10,color:"#6f6285"}}>English</Text>
                                <Text style={{fontSize:18,fontWeight:"600",color:"#6f6285"}}>{content.transcript}</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button}
                            onPress={() => handleNext(index+1)}
                            >
                                <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Ok Got it !</Text>
                            </TouchableOpacity>
                        </View>
                    </View>)
                }
            </LinearGradient>
        </React.Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        levelContent:state.levelContent
    }
}

const mapDispatchToProps =(dispatch) =>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayContents);

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        width:"100%",
        alignItems:"center",
    },
    videoView:{
        width:"100%",
        height:400,
        borderRadius:20
    },
    audioView:{
        margin:50
    },
    transcriptView:{
        margin:20,
        width:"70%",
        alignItems:"center"
    },
    buttonView: {
        top:30,
        width:"70%",
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