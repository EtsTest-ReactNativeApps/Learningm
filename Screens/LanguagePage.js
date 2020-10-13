import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Button,ListItem} from 'react-native-elements';
import { List } from 'react-native-paper';
import {connect} from 'react-redux';
import {languageRequest} from '../actions/index'

function LanguagePage(props){
    const { navigation,userState} =props
    const languageList= userState.CONTENT.languageList
    // React.useEffect(() =>{
    //     const languageList = props.CONTENT.languageList;
    // },[])
// isLanguageChosen
    const [langChoosed,setLangChoosed] =React.useState(null);
    const LangData =[
        "Kannada",
        "Telgu",
        "Tamil",
        "Konkani",
        "Marati",
        "Hindi"
    ]
    const handleChose = (l) =>{
        props.choose({
            ...props.userState
        })
    }
 
    return(
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
        userState:state.user
    }
}
const mapDispatchToProps =(dispatch) =>({
    choose:(data) =>dispatch(languageRequest(data))
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