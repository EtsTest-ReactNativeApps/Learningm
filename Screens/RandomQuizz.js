import React from 'react';
import { Alert,StyleSheet,View,Text } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import QuizzComponent from '../Components/QuizzComponent';
import {quizScore} from '../environment'
import {connect} from 'react-redux';

function RandomQuizz(props) {
    const {quizzState} = props
    const [index, setIndex] = React.useState(0);
    const [questionData,setQuestionData] = React.useState({...quizzState.CONTENT[index]})
    const [answered, setAnswered] = React.useState(null);
    const [points, setPoints] = React.useState(0);
    const [isGameOver, setGameOver] = React.useState(false);
    const totalQsn = quizzState.CONTENT.length
    const [currQsn, setCurrQsn] = React.useState(1);
    const checkCorrect = (answerId,qsnId) => {
        setAnswered(answerId);
        if (answerId === qsnId) {
            setPoints(points+quizScore)
        }
        setTimeout(() => {
            handleNext()
        },800)
    }

    const handleNext = () => {
        setIndex(index + 1)
        setCurrQsn(currQsn+1)
        setAnswered(false)
    }

    React.useEffect(() => {
        if (quizzState.CONTENT[index]) {
            setQuestionData({...quizzState.CONTENT[index]})
        }
        else {
            setGameOver(true)
        }
    },[index])
    const handleClose = () => {
        Alert.alert(
            "Alert",
            "Do you wish to exit the quizz ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log('canceled'),
                    style:"cancel"
                },
                {
                    text: "Yes",
                    onPress: handleExit,
                    style:"default"
                },
                
            ],
            { cancelable: true },
        )
    }

    const handleExit = () => {
        setIndex(0);
        setGameOver(false)
        props.navigation.navigate('UserHome');
    }

    return (
        <React.Fragment> 
            {
                isGameOver ?
                    <GameOverOverlay
                        isVisible={isGameOver}
                        points={points}
                        handleExit={handleExit}
                    />
                    :
                    (
                        <QuizzComponent
                            {...props}
                            title="Quiz"
                            qsn={questionData}
                            checkCorrect={checkCorrect}
                            answered={answered}
                            handleClose={handleClose}
                            points={points}
                            isGameOver={isGameOver}
                            totalQsn={totalQsn}
                            currQsn={currQsn}
                            
                        />
                    )
            }
            
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        quizzState:state.quizzData
    }
}

export default connect(mapStateToProps,null)(RandomQuizz);

const GameOverOverlay = ({ isVisible, points, handleExit }) => {
    return (
            <Overlay
                isVisible={isVisible}
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
                        <Text style={{ ...styles.textStyle,fontSize:18 }}>
                            You can retake the test as much you want ..
                            
                        </Text>
                    
                    </View>
                    <View style={styles.buttonView}>
                        <Button
                            title="Ok"
                            onPress={handleExit}
                            buttonStyle={{backgroundColor:"#67a35f"}}
                            containerStyle={styles.containerStyle}
                        />
                    </View>
                </React.Fragment>
            </Overlay>
    )
}

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