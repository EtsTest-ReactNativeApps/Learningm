import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function RegisterPage(props) {
    const {navigation} = props
    const [data,setData] = React.useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const setUserName = (val) =>{
        if(val.length!== 0){
            setData({
                ...data,
                username:val
            })
        }
    }
    const setEmail =(val) =>{
        if(val.length!== 0){
            setData({
                ...data,
                email:val
            })
        }
    }

    const setPassword = (val) =>{
        if(val.length!== 0){
            setData({
                ...data,
                password:val
            })
        }
    }

    const setConfirmPassword = (val) =>{
        if(val.length!== 0){
            setData({
                ...data,
                confirmpassword:val
            })
        }
    }

    const onSubmit = () =>{
        alert("Register sucessfull")
        console.log(data)
        navigation.navigate("Language")
    }
  return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LinearGradient
                    colors={['#33898f', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height:"100%",
                    }}
                    />
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                {/* input fields start */}
                <ScrollView>
                            <Input
                                placeholder='Your Name'
                                inputContainerStyle={styles.action}
                                inputStyle={styles.textInput}
                                onChangeText={(val) => setUserName(val)}
                                leftIcon={
                                    <FontAwesome
                                    name='user'
                                    size={24}
                                    />
                                }
                            />
                            <Input
                                placeholder=' Your Email'
                                inputContainerStyle={styles.action}
                                inputStyle={styles.textInput}
                                onChangeText={(val) =>setEmail(val)}
                        
                                leftIcon={
                                    <FontAwesome
                                    name='envelope'
                                    size={24}
                                    />
                                }
                            />             
                            <Input
                                placeholder='Password'
                                inputContainerStyle={styles.action}
                                inputStyle={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={(val) =>setPassword(val)}
                                leftIcon={
                                    <FontAwesome
                                    name='lock'
                                    size={24}
                                    />
                                }
                            />
                            <Input
                                placeholder='Confirm Password'
                                inputContainerStyle={styles.action}
                                inputStyle={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={(val) =>setConfirmPassword(val)}
                                leftIcon={
                                    <FontAwesome
                                    name='lock'
                                    size={24}
                                    />
                                }
                            />
                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                            </Text>
                            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                        </View>
                        {/* SUbmit buttons */}
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={onSubmit}
                            >
                            <LinearGradient
                                colors={['#33898f', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color:'#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("LoginPage")}
                                style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#009387'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
  );
}
export default RegisterPage;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
