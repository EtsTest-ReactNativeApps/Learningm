import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Overlay,Button } from 'react-native-elements';


function OverLayModal(props) {
    const {isVisible,setVisible} = props
    const handleYes = () => {
        // console.log(props)
        setVisible()
        props.navigation.navigate('quizzPage')
    }
    const handleNo = () => {
        props.navigation.navigate("levelDetail")
    }
    return (
        
            <Overlay
                isVisible={isVisible}
                onBackdropPress={setVisible}
                overlayStyle={styles.overLayView}
            >
                <React.Fragment>
                <View>
                    <Text style={styles.textStyle}>
                        You have completed all the words .
                        Do you wish to take the level assesment ? 
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

export default OverLayModal;

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