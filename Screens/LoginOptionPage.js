import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux'
import * as Google from 'expo-google-app-auth';

function LoginOptionPage(props) {
  const {navigation} = props
  const [data,setData] =React.useState({
    userEmailId:'',
    userPassword:''
  });

  const signIn = async() =>{
    try{
        const result = await Google.logInAsync({
            androidClientId:"371785710764-omslvo1td435sns5lj99mhge53jai4dg.apps.googleusercontent.com",
            scopes:["profile", "email"]
        })
        if(result.type === "success"){
            setData({
              userEmailId:result.user.email,
              userPassword:result.user.id
            })

            props.login({
              ...data
            })
        }else{
            console.log("caceled")
        }
    }catch(err){
        console.log(err)
    }
}
React.useEffect(() =>{
  if(props.userState.isLogedIN){
    setLoaded(true)
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
                        }]}>Sign In With Google</Text>
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
                        }]}>Sign In With Email</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.registerOptionView}>
              <Text style={{fontSize:20,color:"#399668"}}> Don't Have an account ??</Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("RegisterOption")}
              >
                <Text style={{fontSize:18,fontWeight:"700",color:"#399668"}}>Register</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
}

const mapDispatchToProps =(dispatch) =>({
  login :(data) => dispatch(logInRequest(data))
})
const mapStateToProps =(state) =>{
  return {
    userState :state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginOptionPage);

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

