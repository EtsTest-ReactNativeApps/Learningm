import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { Icon} from 'react-native-elements';
import QuizzHeader from '../Components/QuizzHeader';
import { quizzData } from '../QuizzData';

function Quizz(props) {
    const [index, setIndex] = React.useState(0);
    const [qsn, setQsn] = React.useState(quizzData[index])
    const [answered, setAnswered] = React.useState(false);
    
    const checkCorrect = () => {
        // console.log(optnContentId)
        setAnswered(true);
        handleNext()
    }

    const handleNext = () => {
        setIndex(index+1)
    }

    React.useEffect(() => {
        setQsn(index)
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
            <QuizzHeader   {...props} title="Assesment" handleClose={handleClose}/>
            <View style={styles.mainView}>
                <View style={styles.qsnView}>
                    <Text style={styles.qsnText}>{qsn.qsn.word}</Text>
                    <Icon
                        name="volume-up"
                        type="font-awesome"
                        size={50}
                    />
                </View>
                <View style={styles.optionView}>
                    {qsn.options.map((option,i) => (
                        <React.Fragment
                            key={i}
                        >
                            <OptionButton
                                {...option}
                                checkCorrect={checkCorrect}
                                answered={answered}
                                qsnId={qsn.qsn.contentId}
                            />
                        </React.Fragment>
                    ))}
                    
                </View>
            </View>
        </React.Fragment>
    )
}

export default Quizz;


const OptionButton = (option) => {
    const {answered,qsnId} =option
    return (
        <TouchableOpacity style={option.contentId === qsnId && answered ?
            styles.Correctoption : option.contentId !== qsnId && answered ?
                styles.WrongOption :styles.option
        }
             onPress={() =>option.checkCorrect()}
        >
                <Text style={styles.optionText}>
                    {option.transcript}
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        // padding: 20,
        flex: 1,
        width: "100%",
        alignItems:'center',
        backgroundColor:"#ebebeb"
    },
    scoreView: {
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between"
    },
    qsnView: {
        // margin: 20,
        padding:20,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        width: "100%",
    },
    qsnText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#47705e",
    },
    optionView: {
        marginTop: "25%",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap:"wrap",
        width: "90%",
        height: "70%",
        borderRadius:20,
    },
    Correctoption: {
        width: "48%",
        height: "40%",
        justifyContent: "center",
        alignItems:"center",
        marginTop: "2%",
        borderWidth: 2,
        borderColor:"green",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 25,
    },
    WrongOption: {
        width: "48%",
        height: "40%",
        justifyContent: "center",
        alignItems:"center",
        marginTop: "2%",
        borderWidth: 2,
        borderColor:"red",
        // borderColor:"green",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 25,
    },
    option: {
        width: "48%",
        height: "40%",
        justifyContent: "center",
        alignItems:"center",
        marginTop: "2%",
        borderWidth: 2,
        borderColor:"white",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 25,
    },
    optionText: {
        fontSize: 20,
        color:"green"   
    }
})