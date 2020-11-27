import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import {updateUserProgess} from '../actions/index'
import { connect } from 'react-redux';
import {progressPercent} from '../environment'
function AssesmentOverOverlay(props) {
    const { isGameOver, points, userProg, levelsData,setGameOver} = props
    const [cleared,setcleared] = React.useState(false)
    let maxScore
    let currLevelIndex

    //to get level maxscore and current level index
    levelsData.CONTENT.forEach((level,i) => {
        if (level.levelId === userProg.CONTENT.currLevelId) {
            maxScore = level.levelMaxScore
            currLevelIndex = i
        }
    })

    React.useEffect(() => {
        if (maxScore * progressPercent <= userProg.CONTENT.userScore + points ) {
           setcleared(true)
        } 
    },[])
    
    const [visible, setVisible] = React.useState(isGameOver);
    const handleYes = () => {
        // console.log(cleared)
        if (cleared) {
            // console.log("here")
            props.updateUserProg({
                ...userProg.CONTENT,
                completedWords:0,
                userScore:userProg.CONTENT.userScore + points,
                currLevelId: levelsData.CONTENT[currLevelIndex + 1].levelId,
                isCurLvlAsgnTkn: "Y",
                isLvlAsntComplt:"Y"
            })
        }
        else {
            props.updateUserProg({
                ...userProg.CONTENT,
                isCurLvlAsgnTkn: "Y",
                isLvlAsntComplt:"N"
            })
        }
        setVisible(false)
        setGameOver(false)
       props.navigation.navigate('UserHome')
    }

    return (
        
            <Overlay
                isVisible={visible}
                overlayStyle={styles.overLayView}
            >
                <React.Fragment>
                <View style={{flexGrow:0.5,justifyContent:"space-around"}}>
                    {/* <Text style={{ ...styles.textStyle, fontSize: 50, color:"#f5ad31"}}>
                        Game Over !!
                    </Text> */}
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://media1.giphy.com/media/xUA7barHyuFW6RCF44/giphy.gif',
                        }}
                        
                    />
                    
                    <Text style={{...styles.textStyle,fontSize:35,}}>
                        You earned {points} points 
                    </Text>
                    
                    {
                        cleared ?
                            (
                                <Text style={{...styles.textStyle,fontSize:20,color:"#67a35f"}}>
                                    You have unlocked the {"\n"}next level congrats  !!
                                </Text>
                            ) :
                            (
                                <Text style={{...styles.textStyle,fontSize:20,color:"#f25633",}}>
                                    Retake the assement to {"\n"}unlock next level !
                                </Text>
                            )
                    }
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title="Ok"
                        onPress={handleYes}
                        titleStyle={{fontSize:20}}
                        buttonStyle={{backgroundColor:"#41abd1"}}
                        containerStyle={styles.containerStyle}
                    />
                </View>
                </React.Fragment>
            </Overlay>
        
    )
}


const mapDispatchToProps = (dispatch) => ({
    updateUserProg:(data) => dispatch(updateUserProgess(data)),
})

const mapStateToProps = (state) => {
    return {
        levelsData: state.levelsData,
        userProg:state.userProgress
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AssesmentOverOverlay);

const styles = StyleSheet.create({
    overLayView: {
        backgroundColor:"#c6fc14",
        width: "80%",
        height: "50%",
        justifyContent:"space-around"
    },
    tinyLogo: {
        height: "50%",
        width: "100%",
        borderRadius:10
    },
    textStyle: {
        fontSize: 25,
        fontWeight:"bold",
        textAlign: "center",
        color:"white"
    },
    buttonView: {
        width: "100%",
        // backgroundColor:"red",
        flexDirection: "row",
        justifyContent:"space-around"
    },
    containerStyle: {
        width: "40%",
    }
})