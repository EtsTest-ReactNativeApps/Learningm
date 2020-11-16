import React from 'react';
import {Alert} from 'react-native';
import QuizzComponent from '../Components/QuizzComponent';
import { quizzData } from '../QuizzData';

function RandomQuizz(props) {
    const [index, setIndex] = React.useState(0);
    const [questionData,setQuestionData] = React.useState({...quizzData[index]})
    const [answered, setAnswered] = React.useState(null);
    const [points, setPoints] = React.useState(0);
    const [isGameOver, setGameOver] = React.useState(false);
    // console.log("qsndata",questionData)
    const checkCorrect = (answer) => {
        setAnswered(answer);
        setTimeout(() => {
            handleNext()
        },800)
    }

    const handleNext = () => {
        setIndex(index + 1)
        setAnswered(false)
    }

    React.useEffect(() => {
        if (quizzData[index]) {
            setQuestionData({...quizzData[index]})
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
        props.navigation.navigate('UserHome');
    }
    return (
        <React.Fragment> 
            <QuizzComponent
                {...props}
                qsn={questionData}
                checkCorrect={checkCorrect}
                answered={answered}
                handleClose={handleClose}
            />
        </React.Fragment>
    )
}

export default RandomQuizz;

