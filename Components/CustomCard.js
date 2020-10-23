import React from 'react';
import {View,Text,StyleSheet,ProgressBarAndroid} from "react-native";
import {Card,ListItem,Avatar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; 

function CustomCards(props){
    const {title,maxScore,locked} =props
    return (

            <ListItem
            // Component={TouchableScale}
            disabled={locked}
            friction={90} 
            tension={100} 
            activeScale={0.95} 
            linearGradientProps={{
                colors: ['#bfbd8c','#8c99bf'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
            }}
            containerStyle={styles.containerStyle}
            >
                <ListItem.Content>
                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    {/* <View style={styles.levelImg}/> */}
                        <View style={styles.levelInfoView}>
                            <ListItem.Title style={{ color: 'white', fontWeight: 'bold',fontSize:25 }}>
                            {title}
                            </ListItem.Title>
                            
                            <View>
                                
                         <Text>10/{maxScore}</Text>
                                {/* <Text>100 Points</Text> */}
                                <ProgressBarAndroid 
                                styleAttr="Horizontal" 
                                indeterminate={false} 
                                progress={0.1} 
                                color="yellow" 
                                style={styles.progressBar}
                                />
                                
                            </View>
                        </View>
                        {locked?
                            <Avatar
                            size={100}
                            icon={{name: 'lock', type: 'font-awesome'}}
                        /> :
                        <Avatar
                            size={100}
                            icon={{name: 'unlock', type: 'font-awesome'}}
                        />
                    }
                    </View>
                </ListItem.Content>
                <ListItem.Chevron color="white" size={30} />
            </ListItem>      
    )
}

export default CustomCards;

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row"
    },
    containerStyle:{
        margin:10,
        flexDirection:"row",
        borderRadius:20
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
        flex:1,
        justifyContent:"space-evenly",
        marginLeft:30,
        width:"70%",
    },
    progressBar:{
        width:"100%",
    },
})