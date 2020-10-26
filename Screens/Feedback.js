import React from 'react';
import { View,StyleSheet,Text,TextInput} from 'react-native';
import {} from 'react-native-elements';
import HeaderWithGoBack from '../Components/HeaderWithGoBack';

function FeedBack(props) {
    return (
        <React.Fragment>
            <HeaderWithGoBack
                {...props}
                title="Feedback"
            />
            <View style={styles.mainView}>
                <View style={styles.feedBackView}>
                    <View style={styles.fromAddress}>
                        <Text style={{fontSize:25,fontWeight:"bold",color:'#54698c'}}>Form :</Text>
                        <Text style={{ fontSize: 25, marginLeft: 10, color:"#54698c"}}>yajamankr@gmail.com</Text>
                    </View>
                    <View style={{width:"90%"}}>
                        <TextInput
                            style={styles.messageStyle}
                            multiline={true}
                            />
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

export default FeedBack;

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor:"#33898f"
    },
    feedBackView: {
        marginTop:140,
        width: "80%",
        height:"50%",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:20
    },
    fromAddress: {
        flexDirection: "row",        
    },
    messageStyle: {
        height: 150,
        borderRadius:10,
        borderColor: "grey",
        borderWidth:2,
        fontSize:20
    }
})