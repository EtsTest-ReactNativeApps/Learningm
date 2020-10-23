import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import { Video,Audio } from 'expo-av';
import {Icon} from 'react-native-elements';
import CustomHeader from '../Components/CustomHeader';
import {connect} from 'react-redux';


function DisplayContents(props) {
    const [shouldPlay,setShouldPlay] = React.useState(true);
    const [playing,setPlaying] = React.useState(true)
    const {navigation} =props
    const levelContent = props.levelContent.CONTENT
    const [index,setIndex] = React.useState(props.route.params.index);
    const [content,setContent] = React.useState(levelContent[index])
    // console.log(content)
    const handlePlayAndResume = () =>{
        setShouldPlay(!shouldPlay);
    }

    const playBackStatus = (playback) =>{
        // console.log(playback)
        if(playback.isPlaying){
            setPlaying(true);
        }else{
            setPlaying(false)
        }
    }
    
    const handleNext = (index) =>{
        setIndex(index);
    }
    React.useEffect(()=>{
        if(levelContent[index]){
            setContent(levelContent[index])
        }
        
    },[index])

    return(
        <React.Fragment>
            <CustomHeader openDrawer={props.navigation.openDrawer} language="Introduction"/>
            <View style={styles.mainView}>
                <View style={styles.videoView}>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                        rate={2.0}
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
                        <View style={{backgroundColor:"#848a86"}}>
                            <Text style={{textAlign:"center",margin:10,fontSize:20,fontWeight:"bold"}}>{content.word}</Text>
                        </View>
                </View>
                <View style={styles.audioView}>
                        <TouchableOpacity onPress={() => console.log('audio')}>
                            <Icon  
                                name="volume-up"
                                type="font-awesome"
                                size={45}
                                color="orange"
                            />
                        </TouchableOpacity>
                </View>
                <View style={styles.transcriptView}>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>English</Text>
                        <Text>{content.transcript}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => handleNext(index+1)}
                    >
                        <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Ok Got it !</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        // justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#c5dede"
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
    buttonView:{
        position:"absolute",
        bottom:40,
        width:"70%",
    },
    button:{
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        height:45
    },
    controlBar:{
        position:"absolute",
        top:"45%",
        left:"45%"
    }
})