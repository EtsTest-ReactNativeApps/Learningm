import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Button,ListItem,Card,Icon} from 'react-native-elements';
// import { List } from 'react-native-paper';
import {connect} from 'react-redux';
import {languageRequest,levelRequest,updateUserProgess,setUserProgressRequest} from '../actions/index'

function LanguagePage(props){
    const { navigation,userState} =props
    // const languageList= userState.CONTENT.languageList
    // const [langChoosed, setLangChoosed] = React.useState(null);
    // console.log(userState)
    const LangData =[
        "Kannada",
        "Telgu",
        "Tamil",
        "Konkani",
        "Marati",
        "Hindi"
    ]
    // const [loading, setLoading] = React.useState(false);
    const handleChose = (l) =>{
        props.getLevel({
            "fk_languageId":1  
        })
    }
    const handleClick = () => {  
        props.setUserProgress({
            CONTENT: {
                ...userState.CONTENT.userProgList[0]
            }
        })
        props.getLevel({
            "fk_languageId":1  
        })
    }
 
    React.useEffect(() => {
        if (!userState.CONTENT.isLanguageChoosen) {
            if (props.levels.STS == '200') {
                // setLoading(true);
                const leveldata = props.levels.CONTENT[0]
                props.updateProgress({
                    userId: userState.CONTENT.userId,
                    languageId: leveldata.fk_languageId,
                    currLevelId: leveldata.levelId,
                    completedWords: 0,
                    userScore: 0,
                    isLvlAsntComplt: 'N',
                    isCurLvlAsgnTkn: 'N',
                    levelSerialNo: leveldata.levelSerialNo,
                    totalCompletedWords:0,
                })
            }
        }
    }, [props.levels])
    React.useEffect(() => {
        // console.log(props.userProgData)
        if (!userState.CONTENT.isLanguageChoosen) {
            if (props.userProgData.STS == "200") {
                props.choose({
                    ...userState
                })
            }
        } else {
            // console.log("here")
            if (props.levels.STS == '200') {
                props.choose({
                    ...userState
                })
            }
        }
        
    },[props.userProgress])
    return(
        <React.Fragment>
            {
                userState.CONTENT.isLanguageChoosen && userState.CONTENT.isLanguageChoosen == 'Y'
                ? renderSelectedLanguage(userState.CONTENT.languageList,handleClick):
                renderLanguageList(LangData, handleChose)}
       </React.Fragment>
    )
}
const renderSelectedLanguage = (langList,handleClick) => {
    return (
        <View style={{...styles.languagePageView,backgroundColor:"#33898f"}}>
        <View style={styles.nativeLangView}>
            <Text style={{fontSize:30,color:"white",fontWeight:"bold"}}>My Languages Are </Text>
        </View>
        {/* <Text style={styles.chooseLangText}>I want to learn</Text> */}
        <View style={styles.selectedOuterView}>

                        {
                    langList.map(l => (
                        <Card containerStyle={styles.selectedlangView} key={l.languageId}>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                                <Text style={{ fontSize: 25, color: "green" }}>{l.language}</Text>
                            <Icon
                                name="chevron-right"
                                type="font-awesome"
                                color="green"
                                onPress={handleClick}
                            />
                            </View>
                        </Card>
                            ))
                        }
                    
        </View>
    </View>
    )
}

const renderLanguageList = (LangData,handleChose) => {
    return (
        <View style={styles.languagePageView}>
        <View style={styles.nativeLangView}>
            <Text style={{fontSize:30,color:"#399668"}}>I speak </Text>
            <Button
                title="English"
                type="outline"
                titleStyle={styles.titleStyle}
                buttonStyle={styles.buttonStyle}
                onPress={() => {}}
            />
        </View>
        <Text style={styles.chooseLangText}>I want to learn</Text>
        <View style={styles.outerView}>
            
                    <View style={styles.languageView}> 
                    {
                        LangData.map((l,i) =>(
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.listTitle}>{l}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron size={30} color="green" onPress={handleChose}/>
                            </ListItem>
                        ))
                    }
                 </View>
        </View>
    </View>
    )
}
const mapStateToProps =(state) =>{
    return {
        userState: state.user,
        levels: state.levelsData,
        userProgData:state.userProgress
    }
}
const mapDispatchToProps =(dispatch) =>({
    choose: (data) => dispatch(languageRequest(data)),
    updateProgress: (data) => dispatch(updateUserProgess(data)),
    getLevel: (data) => dispatch(levelRequest(data)),
    setUserProgress: (data) => dispatch(setUserProgressRequest(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(LanguagePage);

const styles = StyleSheet.create({
    languagePageView:{
        flex:1,
        alignItems:"center"
    },
    nativeLangView:{
        width:"100%",
        top:"27%",
        flexDirection:"row",
        justifyContent:"center"
    },
    chooseLangText:{
        top:"17%",
        fontSize:30,
        color:"#399668"
    },
    buttonStyle:{
        width:150,
        borderWidth:2,
        borderRadius:30,
        borderColor:"#399668",
    },
    titleStyle:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"600",
        color:"#399668"
    },
    outerView:{
        top:"22%",
        width:330,
        alignItems:"center",
        justifyContent:"center",
        minHeight:"10%",
        backgroundColor:"#399668",
        borderRadius:35,
        transform:[
            {rotate:"-2deg"}
        ]
    },
    selectedOuterView: {
        top:"30%",
        width: 330,
        height:"40%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:35,
    },
    selectedlangView: {
        width:"80%",
        margin: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    languageView:{
        position:"relative",
        width:"80%",
        margin:20,
        transform:[
            {rotate:"2deg"}
        ]
    },
    listTitle:{
        fontSize:25,
        color:"#399668"
    }
})