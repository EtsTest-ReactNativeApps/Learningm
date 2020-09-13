import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Platform} from 'react-native';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {logInRequest} from '../actions/index'
function LoginPage(props) {
  const {navigation} =props

  const [data,setData] =React.useState({
    userEmailId:'',
    userPassword:''
  })

  const setEmail = (val)=>{
    if(val.length!==0){
      setData({
        ...data,
        userEmailId:val
      })
    }
  }
  const setPassword =(val) =>{
    if(val.length!==0){
      setData({
        ...data,
        userPassword:val
      })
    }
  }

  const onSubmit = () =>{
    let auth  = props.login({
      ...data
    })
    if(auth.payload.isLogedin){
      navigation.navigate("UserHome")
    }
   
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
              <Text style={styles.text_header}>Sign In  !</Text>
          </View>
          <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}
          >
            <ScrollView style={styles.signView}>
                <Input
                  placeholder='Email'
                  inputContainerStyle={styles.action}
                  inputStyle={styles.textInput}
                  onChangeText={(val) => setEmail(val)}
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
                <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>Forgot Password ?</Text>
                </View>
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
                          }]}>Sign In</Text>
                      </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                      onPress={() => navigation.navigate("RegisterOption")}
                      style={[styles.signIn, {
                          borderColor: '#009387',
                          borderWidth: 1,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#009387'
                      }]}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>
          </Animatable.View>
    </View>
  );
}
const mapDispatchToProps =(dispatch) =>({
  login :(data) => dispatch(logInRequest(data))
})
const mapStateToProps =(state) =>{
  return {
    auth :state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);

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
    signView:{
      marginTop:100
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
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
      alignItems:"center",
      marginTop: 20
  },
  color_textPrivate: {
      color: 'gray',
      fontWeight:"bold"
  }
  });
