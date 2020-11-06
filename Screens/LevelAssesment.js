import React from 'react';
import {Alert} from 'react-native';
import QuizzComponent from '../Components/QuizzComponent';
import { quizzData } from '../QuizzData';

function LevelAssesment(props) {
    const [index, setIndex] = React.useState(0);
    const [questionData,setQuestionData] = React.useState({...quizzData[index]})
    const [answered, setAnswered] = React.useState(false);
    console.log("qsndata",questionData)
    const checkCorrect = () => {
        setAnswered(true);
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
                    onPress: () => props.navigation.navigate('UserHome'),
                    style:"default"
                },
                
            ],
            {cancelable:true}
        )
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

export default LevelAssesment;

