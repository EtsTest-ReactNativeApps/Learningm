import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import {updateUserProgess} from '../actions/index'
import { connect } from 'react-redux';
import {progressPercent} from '../environment'
function AssesmentOverOverlay(props) {
    const { isGameOver, points, userProg, levelsData } = props
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
       props.navigation.navigate('UserHome')
    }

    return (
        
            <Overlay
                isVisible={visible}
                overlayStyle={styles.overLayView}
            >
                <React.Fragment>
                <View>
                    <Text style={styles.textStyle}>
                        Game Over !!!
                    </Text>
                    <Text style={styles.textStyle}>
                        Your score is {points}
                       
                    </Text>
                    {
                        cleared ?
                            (
                                <Text style={{...styles.textStyle,fontSize:20,color:"red"}}>
                                    You have unlocked the next level congrats  !!
                                </Text>
                            ) :
                            (
                                <Text style={{...styles.textStyle,fontSize:20,color:"red"}}>
                                    Retake the assement to unlock next level !
                                </Text>
                            )
                    }
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title="Ok"
                        onPress={handleYes}
                        buttonStyle={{backgroundColor:"#67a35f"}}
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
        width: "80%",
        height: "30%",
        justifyContent:"space-around"
    },
    textStyle: {
        fontSize: 25,
        fontWeight:"bold",
        textAlign: "center",
        color:"#525c51"
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