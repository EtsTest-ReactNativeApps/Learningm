import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import {connect} from 'react-redux'
import * as Google from 'expo-google-app-auth';
import {signUpRequest} from '../actions/index'
function RegisterOptionPage(props) {
  const {navigation} = props
  //google sign up function
  const signIn = async() =>{
    try{
        await Google.logInAsync({
            androidClientId:"371785710764-omslvo1td435sns5lj99mhge53jai4dg.apps.googleusercontent.com",
            scopes:["profile", "email"]
        }).then(result => {
          if (result.type === 'success') {
            props.signup({
                firstName:result.user.givenName,
                lastName:result.user.familyName,
                email:result.user.email,
                userPassword:result.user.id
            })
          } else {
            console.log("canceled")
          }
        })
    }catch(err){
        console.log(err)
    }
}
// after signup checking the user?
React.useEffect(() =>{
  if(props.userState.isRegistered){
    navigation.navigate('Language')
  }
},[props.userState])

  return (
    
    <View style={styles.LndingPageView}>
        <View style={styles.logo}>
          <Image
              source={require('../assets/logo2.png')}
              style={styles.image}
            />
        </View>
        <View style={styles.buttonView}>
                <TouchableOpacity
                        onPress={signIn}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => navigation.navigate("RegisterPage")}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign Up With Email</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.registerOptionView}>
              <Text style={{fontSize:20,color:"#399668"}}>  Have an account ??</Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("LoginOptionPage")}
              >
                <Text style={{fontSize:18,fontWeight:"700",color:"#399668"}}>Sig In</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}
// user state from redux store
const mapStateToProps =(state) =>{
  return {
    userState:state.user
  }
}
// signup function in dispatch
const mapDispatchToProps = (dispatch) =>({
  signup:(data) =>dispatch(signUpRequest(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterOptionPage);

const styles = StyleSheet.create({
    LndingPageView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center"
  },
  logo:{
    position:"relative",
    width:"70%",
    height:"35%",
    borderRadius:25,
    top:"20%"
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:25,
  },
  registerOptionView:{
      position:"absolute",
      bottom:"10%",
      alignItems:"center"
  },
  buttonView:{
    width:"80%",
    position:"absolute",
    bottom:"20%"
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

});

