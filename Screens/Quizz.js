import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Icon} from 'react-native-elements';
import HeaderWithGoBack from '../Components/HeaderWithGoBack';

function Quizz(props) {
    return (
        <React.Fragment>
            <HeaderWithGoBack {...props} title="Quizz" />
            <View style={styles.mainView}>
                <View style={styles.scoreView}>
                    <View>
                        <Text style={{fontSize:20,fontWeight:"bold", color:"white"}}>Name :Bharadwaj</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:20,fontWeight:"bold", color:"white"}}>Score : +100 Points</Text>
                    </View>
                </View>
                <View style={styles.qsnView}>
                    <Icon
                        name="volume-up"
                        type="font-awesome"
                        size={50}
                    />
                    <Text>English Transscipt</Text>
                </View>
                <View style={styles.optionView}>
                    <View style={styles.option}>
                        <Text style={styles.optionText}>Option 1</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.optionText}>
                            Option 2
                        </Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.optionText}>
                            Option 3
                        </Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.optionText}>
                            Option 4
                        </Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Quizz;

const styles = StyleSheet.create({
    mainView: {
        padding: 20,
        flex: 1,
        width: "100%",
        alignItems:'center',
        backgroundColor:"#33898f"
    },
    scoreView: {
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-between"
    },
    qsnView: {
        marginTop:40,
        alignItems: "center",
        justifyContent:"center",
        width: "85%",
        height: "20%",
        borderRadius:20,
        backgroundColor:"white"
    },
    optionView: {
        marginTop: "25%",
        flexDirection: "row",
        // justifyContent: "space-around",
        flexWrap:"wrap",
        width: "85%",
        height: "50%",
        borderRadius:20,
        backgroundColor:"white"
    },
    option: {
        width: "45%",
        height: "45%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems:"center",
        // marginTop: 10,
        margin:7,
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