import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button,Card, } from 'react-native-elements';
import {RadioButton} from 'react-native-paper'

function LanguagePage(){
    return(
        <View style={styles.languagePageView}>
            <View style={styles.nativeLangView}>
                <Text style={{fontSize:30,color:"#399668"}}>I speak </Text>
                <Button
                    title="English"
                    type="outline"
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                />
            </View>
            <Text style={styles.chooseLangText}>I want to learn</Text>
            <View style={styles.outerView}>
                <View style={styles.innerView}>
                    <Card>
                        <View style={styles.radiobuttonView}>
                            <RadioButton
                                value="first"
                            />
                            <Text style={{fontSize:25,marginLeft:10,color:"#399668"}}>Kannada</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.radiobuttonView}>
                            <RadioButton
                                value="first"
                            />
                            <Text style={{fontSize:25,marginLeft:10,color:"#399668"}}>Sanskrit</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.radiobuttonView}>
                            <RadioButton
                                value="first"
                            />
                            <Text style={{fontSize:25,marginLeft:10,color:"#399668"}}>Hindi</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.radiobuttonView}>
                            <RadioButton
                                value="first"
                            />
                            <Text style={{fontSize:25,marginLeft:10,color:"#399668"}}>Telgu</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.radiobuttonView}>
                            <RadioButton
                                value="first"
                            />
                            <Text style={{fontSize:25,marginLeft:10,color:"#399668"}}>Marati</Text>
                        </View>
                    </Card>
                </View>
            </View>
        </View>
    )
}

export default LanguagePage;

const styles = StyleSheet.create({
    languagePageView:{
        flex:1,
        alignItems:"center"
    },
    nativeLangView:{
        width:"100%",
        top:"20%",
        flexDirection:"row",
        justifyContent:"center"
    },
    chooseLangText:{
        top:"12%",
        fontSize:30,
        color:"#399668"
    },
    buttonStyle:{
        width:"90%",
        borderWidth:2,
        borderRadius:20,
        borderColor:"#399668",
    },
    titleStyle:{
        fontSize:22,
        fontWeight:"600",
        color:"#399668"
    },
    outerView:{
        top:"17%",
        width:330,
        height:550,
        backgroundColor:"#399668",
        borderRadius:35,
        transform:[
            {rotate:"-2deg"}
        ]
    },
    innerView:{
        position:"relative",
        top:40,
        left:25,
        borderRadius:5,
        width:"85%",
        height:"85%",
        backgroundColor:"white",
        transform:[
            {rotate:"2deg"}
        ]
    },
    radiobuttonView:{
        flexDirection:"row",
        alignItems:"center"
    }
})