import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ScrollView, Picker,Alert ,ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper'
import { Rating, } from 'react-native-elements';
import HeaderWithGoBack from '../Components/HeaderWithGoBack';
import {LinearGradient} from 'expo-linear-gradient'
import { connect } from 'react-redux';
import {feedbackSubmit} from '../actions/index'

function FeedBack(props) {
    const {userProg} = props
    const [feedBack, setFeedBack] = React.useState('');
    const [rating, setRating] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const handleRating = (rating) => {
        setRating(rating)
    }
    const handleFeedback = (value) => {
        setFeedBack(value.nativeEvent.text)
    } 
    const handleSubmit = () => {
        props.feedback({
                userId:userProg.CONTENT.userId,
                languageId:userProg.CONTENT.languageId,
                ratings:rating,
                feedBack:feedBack
        })
        
        // setLoading(true);
    }

    React.useEffect(() => {
        if (props.feedbackData.STS ==='200') {
            setFeedBack('');
            setRating(0);
            setLoading(false);
            Alert.alert(
                "Feedback Status",
                "Thank you for provoding feedback"
            )
        }
        if (props.feedbackData.STS === '500') {
            setFeedBack('');
            setRating(0);
            setLoading(false);
            Alert.alert(
                "Feedback Status",
                "failed to submit feedback try again"
            )
        }
    },[props.feedbackData])

    return (
        <React.Fragment>
            <HeaderWithGoBack
                {...props}
                title="Feedback"
            />
                <LinearGradient
                colors={['#33898f', '#82baab']}
                style={{
                width:"100%",
                height:"100%"
                }}
            >   
                <View style={styles.mainView}>
                   
                    <View style={styles.feedBackView}>
                    <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:"space-around",alignItems:"center"}}>
                        <View style={{padding:15}}>
                            <Text style={{ fontSize: 21, fontWeight: "bold", color:"#5c8d9e",textAlign:"center"}}>
                                    Give your feedback on learning Kannada language ,Your every feedback matters,
                                    and rate your experience.
                                </Text>
                            </View>
                            <TextInput
                                    style={{width:"85%",}}
                                    scrollEnabled
                                    multiline
                                    numberOfLines={10}
                                    theme={{ colors: { primary: '#5c8d9e',underlineColor:'transparent',}}}
                                    editable
                                    value={feedBack}
                                    onChange={handleFeedback}
                                    mode="outlined"
                                    placeholder="Provide Feedback"
                            />
                            <View style={{marginTop:20}}>
                                <Rating
                                    type="star"
                                    ratingCount={5}
                                    ratingColor="#e3cf5b"
                                    minValue={0}
                                    startingValue={rating}
                                    onFinishRating={handleRating}
                                    imageSize={40}
                                />
                            </View>
                            <View style={{width:"60%",marginTop:20}}>
                                <TouchableOpacity style={styles.button}
                                    onPress={handleSubmit}
                                    disabled ={loading}
                                >
                                    {
                                        loading ?
                                            <ActivityIndicator />
                                            :<Text>Submit</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                            </ScrollView> 
                        </View>
                        
                </View>
                </LinearGradient>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        userProg: state.userProgress,
        feedbackData: state.feedback,
        // user:state.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    feedback:(data) => dispatch(feedbackSubmit(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(FeedBack);

const styles = StyleSheet.create({
    mainView: {
        // flex:1,
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    feedBackView: {    
        top:'10%',
        width:"80%",
        height:"60%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent:'space-around',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 20,
    },
    ratingView: {
        
    },
    button: {
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:15,
        backgroundColor:"orange"
    },
    messageStyle: {
        borderWidth: 2,
        borderColor: "grey",
        borderRadius:20
    }
})