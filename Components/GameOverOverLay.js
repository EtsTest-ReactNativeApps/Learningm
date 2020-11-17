import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Overlay,Button } from 'react-native-elements';

function GameOverOverLay(props) {
    const {isGameOver,points} = props
    const handleYes = () => {
        props.navigation.navigate('assesmentPage')
    }
    const handleNo = () => {
        props.navigation.navigate("levelDetail")
    }

    return (
        
            <Overlay
                isVisible={isGameOver}
                // onBackdropPress={setVisible}
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
                    <Text style={styles.textStyle}>
                        Do you wish to take agian ?
                    </Text>
                </View>
                <View style={styles.buttonView}>
                    <Button
                            title="No"
                            onPress={handleNo}
                            buttonStyle={{backgroundColor:"#fcba03"}}
                            containerStyle={styles.containerStyle}
                        />
                    <Button
                        title="Yes"
                        onPress={handleYes}
                        buttonStyle={{backgroundColor:"#67a35f"}}
                        containerStyle={styles.containerStyle}
                    />
                    
                </View>
                </React.Fragment>
            </Overlay>
        
    )
}



export default GameOverOverLay;

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