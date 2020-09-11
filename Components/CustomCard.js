import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native";
import {Card} from 'react-native-elements';

function CustomCards(){
    return (
        <Card
          containerStyle={{borderRadius:15}}
        >
            <View style={styles.cardContainer}>
                <View style={styles.levelImg}/>
                <View style={styles.levelInfoView}>
                    <Text style={{fontSize:23,color:"#399668",fontWeight:"600"}}>Level 1</Text>
                </View>
            </View>
        </Card>
    )
}

export default CustomCards;

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row"
    },
    levelImg:{
        width:150,
        height:150,
        borderWidth:3,
        backgroundColor:"#7cdea0",
        borderTopRightRadius:40,
        borderBottomLeftRadius:40,
        borderColor:"#7cdea0"
    },
    levelInfoView:{
        marginLeft:30,
        width:"70%",
        alignItems:"flex-start"
    }
})