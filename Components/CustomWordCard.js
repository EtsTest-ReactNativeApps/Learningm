import React from 'react';
import {View,Text,StyleSheet,ProgressBarAndroid} from "react-native";
import {ListItem,Avatar,Card} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; 
function CustomWordCard(props){
    const {isCompleted,word} = props
    return (

            
            <Card>
                <View style={styles.wordStyle}>
                    <View style={styles.iconCellStyle}>
                            <Avatar
                                size={50}
                                icon={{name: 'bolt', type: 'font-awesome',color:"#20a89d"}}
                            />
                    </View>
                    <View style={styles.textCellStyle}>
                            <Text style={{fontSize:25,fontWeight:"bold",color:"#441f70",textTransform:"capitalize"}}>{word}</Text>
                    </View>
                    <View style={styles.iconCellStyle}>
                        {isCompleted?
                            <Avatar
                                size={50}
                                icon={{name: 'check', type: 'font-awesome',color:"#2fb55c",}}
                            />:
                            null
                        }
                        </View>       
                    </View>
                
            </Card>
                
    )
}

export default CustomWordCard;

const styles = StyleSheet.create({
    containerStyle:{
        margin:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    wordStyle:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center"
    },
    textCellStyle:{
        width:"60%"
    },
    iconCellStyle:{
        width:"20%",
    }
})